export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  size: 'small' | 'medium' | 'large';
  details?: string;
  client?: string;
  year?: string;
  location?: string;
  tags: string[];
  challenge?: string;
  solution?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "lalbagh-flower-show",
    title: "Lalbagh Flower Show",
    category: "Design, Print, Event Installation",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
    description: "End-to-end branding and spatial design for one of Bangalore's most iconic events.",
    size: "large",
    client: "Department of Horticulture",
    year: "2024",
    location: "Bangalore, India",
    tags: ["Spatial Design", "Large Format Print", "Sculpture"],
    challenge: "Managing over 1 million visitors in a heritage site while maintaining structural integrity for massive floral sculptures.",
    solution: "We engineered custom fiber-reinforced structures that provided the 'skeleton' for the floral arrangements, paired with moisture-resistant high-definition prints for directional signage.",
    gallery: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
      "https://images.unsplash.com/photo-1544413647-b5156557871b?q=80&w=1200"
    ]
  },
  {
    id: "theatrical-set-design",
    title: "Theatrical Set Design",
    category: "Stage Design, Production",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
    description: "Immersive set design featuring custom fiber work and dynamic lighting.",
    size: "small",
    client: "National School of Drama",
    year: "2023",
    location: "New Delhi",
    tags: ["Stage Design", "Production", "Lighting"],
    challenge: "Creating a multi-functional stage that could adapt to three different play styles in a single evening.",
    solution: "A modular platform system with integrated LED tracks and pivot points for rapid scene transitions.",
    gallery: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200"
    ]
  },
  {
    id: "artistic-fiber",
    title: "Artistic Fiber Sculptures",
    category: "Sculpture, Fiber Work",
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=1200&auto=format&fit=crop",
    description: "Custom-built large format sculptures for public exhibitions and brand spaces.",
    size: "medium",
    client: "Modern Art Museum",
    year: "2023",
    location: "Bangalore",
    tags: ["Sculpture", "Fiber Work", "Art Installation"],
    challenge: "Representing fluid organic shapes using rigid high-durability materials for outdoor longevity.",
    solution: "We used parametric design to create a modular fiberglass shell with a metallic UV-resistant finish.",
    gallery: [
      "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=1200",
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200"
    ]
  },
  {
    id: "exhibition-pavilion",
    title: "Exhibition Pavilion",
    category: "Indoor Branding, Production",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "A modular, interactive exhibition space designed for maximum brand impact.",
    size: "medium",
    client: "TechCorp Global",
    year: "2024",
    location: "Hyderabad",
    tags: ["Indoor Branding", "Production", "Exhibition"],
    challenge: "Creating a premium feel using lightweight, transportable materials for a multi-city tour.",
    solution: "Engineered aluminum frames with tension-fabric graphics and integrated touch-sensitive kiosks.",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200"
    ]
  }
];
