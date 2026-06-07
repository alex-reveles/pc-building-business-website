export interface BuildComponent {
  category: string;
  name: string;
  price: number;
}

export interface Build {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  useCase: string[];
  components: BuildComponent[];
  benchmarks: { game: string; fps: string; settings: string }[];
  inStock: boolean;
  image?: string;
}

export const featuredBuild: Build = {
  id: "featured",
  name: "The Starter Slayer",
  tagline: "1080p Dominator — Max FPS, Zero Compromise",
  price: 1099,
  description:
    "A meticulously assembled 1080p gaming powerhouse. Handles every AAA title on high settings with frames to spare. Perfect for competitive gaming, content creation, and everyday use.",
  useCase: ["1080p Gaming", "Streaming", "Content Creation", "Everyday Use"],
  components: [
    { category: "CPU", name: "AMD Ryzen 5 7600X", price: 199 },
    { category: "GPU", name: "NVIDIA RTX 4060 8GB", price: 299 },
    { category: "Motherboard", name: "MSI MAG B650 TOMAHAWK", price: 169 },
    { category: "RAM", name: "G.Skill Ripjaws 32GB DDR5-6000", price: 89 },
    { category: "SSD", name: "Samsung 990 Pro 1TB NVMe", price: 99 },
    { category: "PSU", name: "Corsair RM750e 80+ Gold", price: 89 },
    { category: "Case", name: "Fractal Design North", price: 109 },
    { category: "Cooler", name: "Arctic Liquid Freezer III 240", price: 79 },
  ],
  benchmarks: [
    { game: "Cyberpunk 2077", fps: "85–110 FPS", settings: "High / RT Off" },
    { game: "Call of Duty: Warzone", fps: "180–220 FPS", settings: "High" },
    { game: "Fortnite", fps: "240+ FPS", settings: "Competitive" },
    { game: "Hogwarts Legacy", fps: "90–120 FPS", settings: "High" },
  ],
  inStock: true,
};
