export const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECT", href: "#projects" },
] as const;

export const stats = [
  { value: 13, suffix: "+", label: "Years Experience", accent: "#3B82F6" },
  { value: 64, suffix: "+", label: "Total Project", accent: "#F97316" },
] as const;

export const projects = [
  { title: "Restaurant", number: "01", image: "/images/gallery-mock.png" },
  { title: "Living Room", number: "02", image: "/images/services-mock.png" },
  { title: "Office Space", number: "03", image: "/images/bento-mock.png" },
] as const;

export const products = [
  { name: "Sofa", collections: "129 Collection", icon: "sofa" as const },
  { name: "Table", collections: "75 Collection", icon: "table" as const },
  { name: "Lamp", collections: "219 Collection", icon: "lamp" as const },
] as const;

export const collectionItems = [
  {
    name: "Modern Armchair",
    category: "Seating",
    price: "$1,240",
    image: "/images/armchair-corner.png",
  },
  {
    name: "Workspace Sofa",
    category: "Living",
    price: "$2,890",
    image: "/images/sofa-workspace.png",
  },
  {
    name: "Dining Set",
    category: "Dining",
    price: "$3,450",
    image: "/images/bento-mock.png",
  },
  {
    name: "Kitchen Island",
    category: "Kitchen",
    price: "$4,200",
    image: "/images/dining-kitchen.png",
  },
] as const;

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer full interior design services including space planning, furniture selection, custom cabinetry, lighting design, and project management from concept to completion.",
  },
  {
    question:
      "Can I purchase individual products without hiring your design services?",
    answer:
      "Absolutely. Browse our furniture collection and purchase individual pieces. Our design team is available if you'd like guidance on styling your space.",
  },
  {
    question: "Can you customize furniture to fit our space or brand?",
    answer:
      "Yes. We work with skilled craftspeople to create bespoke furniture tailored to your dimensions, materials, and brand identity.",
  },
  {
    question: "How long does a typical design project take?",
    answer:
      "Most residential projects take 8–14 weeks from initial consultation to final installation. Commercial projects vary based on scope and scale.",
  },
] as const;

export const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;
