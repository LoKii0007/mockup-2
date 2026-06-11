import { collectionItems, projects } from "./data";
import { images } from "./images";

export function getLandingImageUrls(): string[] {
  const urls = [
    ...Object.values(images),
    ...projects.map((project) => project.image),
    ...collectionItems.map((item) => item.image),
  ];

  return [...new Set(urls)];
}

function loadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = url;

    if (img.complete) {
      finish();
    }
  });
}

export function preloadImages(
  urls: string[],
  onProgress: (progress: number) => void
): Promise<void> {
  if (urls.length === 0) {
    onProgress(100);
    return Promise.resolve();
  }

  let loaded = 0;

  const report = () => {
    loaded += 1;
    onProgress(Math.round((loaded / urls.length) * 100));
  };

  return Promise.all(
    urls.map((url) =>
      loadImage(url).then(() => {
        report();
      })
    )
  ).then(() => undefined);
}

let landingPreloadPromise: Promise<void> | null = null;
let landingPreloadDone = false;

export function isLandingPreloadDone() {
  return landingPreloadDone;
}

export function markLandingPreloadDone() {
  landingPreloadDone = true;
}

/** Preloads landing images once per page session (survives strict-mode remounts). */
export function preloadLandingImages(
  onProgress: (progress: number) => void
): Promise<void> {
  if (landingPreloadDone) {
    onProgress(100);
    return Promise.resolve();
  }

  if (!landingPreloadPromise) {
    const listeners = new Set<(progress: number) => void>();
    listeners.add(onProgress);

    landingPreloadPromise = preloadImages(getLandingImageUrls(), (progress) => {
      listeners.forEach((listener) => listener(progress));
    }).then(() => {
      landingPreloadDone = true;
    });

    return landingPreloadPromise;
  }

  return landingPreloadPromise.then(() => {
    onProgress(100);
  });
}
