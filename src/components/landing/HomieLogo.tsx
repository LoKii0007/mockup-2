type HomieLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function HomieLogo({ className = "", size = "md" }: HomieLogoProps) {
  const sizes = { sm: "text-2xl", md: "text-4xl", lg: "text-6xl" };

  return (
    <span
      className={`inline-flex items-center font-bold tracking-tight ${sizes[size]} ${className}`}
    >
      HO
      <svg
        viewBox="0 0 32 36"
        className="mx-0.5 inline-block h-[0.85em] w-[0.85em]"
        aria-hidden
      >
        <path
          d="M16 2L4 14v18h8v-10h8v10h8V14L16 2z"
          fill="currentColor"
        />
        <path
          d="M16 2L4 14h24L16 2z"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
      IE
    </span>
  );
}
