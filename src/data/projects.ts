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
    id: "real-estate-branding",
    title: "Real Estate Project Branding",
    category: "Real Estate, Brochures & Hoardings",
    image: "/images/akruti-designs/villasa-1.jpg",
    description: "End-to-end branding materials for residential and commercial real estate launches.",
    size: "large",
    client: "Villasa & Ruby Developers",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Real Estate", "Brochure", "Hoarding", "Brand Launch"],
    challenge: "Building trust and aspiration for off-plan properties through printed collateral alone.",
    solution: "Architectural visualisation integration with premium brochure production and large-format site hoardings.",
    gallery: [
      "/images/akruti-designs/villasa-2.jpg",
      "/images/akruti-designs/villasa-3.jpg",
      "/images/akruti-designs/villasa-4.jpg",
      "/images/akruti-designs/villasa-5.jpg",
      "/images/akruti-designs/farmhouse-1.jpg",
      "/images/akruti-designs/farmhouse-2.jpg",
      "/images/akruti-designs/farmhouse-3.jpg",
      "/images/akruti-designs/srisai-1.jpg",
      "/images/akruti-designs/srisai-2.jpg",
      "/images/akruti-designs/ruby-developers.jpg",
      "/images/akruti-designs/shankar-1.jpg"
    ]
  },
  {
    id: "stage-design-production",
    title: "Stage Design & Production",
    category: "Stage Design, Event Production",
    image: "/images/stage/stall-design.jpg",
    description: "Custom-engineered stall and stage designs for exhibitions, trade shows, and cultural events.",
    size: "medium",
    client: "Various Event Organizers",
    year: "2024",
    location: "Bangalore, India",
    tags: ["Stage Design", "Stall Design", "Event Production"],
    challenge: "Creating immersive, brand-aligned stage environments that can be assembled and dismantled efficiently.",
    solution: "Modular fabrication with reusable structural elements and high-resolution printed backdrops.",
    gallery: [
      "/images/stage/stage-decoration.jpg",
      "/images/stage/stage-01.jpg",
      "/images/stage/stage-03.jpg"
    ]
  },
  {
    id: "hotel-qsr-banners",
    title: "Hotel & QSR Banner Campaign",
    category: "Banner Design, Large Format Print",
    image: "/images/banners/hotel-qsr-1.jpg",
    description: "High-impact banner and hoarding campaigns for hospitality and quick-service restaurants.",
    size: "small",
    client: "Hotel QSR Group",
    year: "2024",
    location: "Bangalore, India",
    tags: ["Banner Design", "Large Format Print", "Outdoor Branding"],
    challenge: "Maintaining brand consistency across banners ranging from 3×2 ft counter displays to 10×20 ft outdoor hoardings.",
    solution: "A unified visual system with scalable artwork that preserves color accuracy and sharpness at any print size.",
    gallery: [
      "/images/banners/hotel-qsr-2.jpg",
      "/images/banners/visista.jpg",
      "/images/banners/billboard-main.jpg",
      "/images/banners/banner-11x10.jpg",
      "/images/banners/banner-3x3.jpg",
      "/images/banners/banner-12x3.jpg",
      "/images/banners/sangeetha-sourabha.jpg",
      "/images/banners/instant-mixes.jpg"
    ]
  },
  {
    id: "corporate-brochures",
    title: "Corporate Brochures",
    category: "Brochure Design, Print",
    image: "/images/brochures/idea-infinity-1.jpg",
    description: "Premium tri-fold and multi-page brochures for corporate clients across diverse industries.",
    size: "medium",
    client: "Idea Infinity & Others",
    year: "2023",
    location: "Bangalore, India",
    tags: ["Brochure Design", "Print", "Corporate Identity"],
    challenge: "Communicating complex service offerings in a visually compelling, concise printed format.",
    solution: "Strategically structured content layouts with bold typography and high-resolution photography.",
    gallery: [
      "/images/brochures/idea-infinity-2.jpg",
      "/images/brochures/3fold-brochure.jpg",
      "/images/brochures/arz-front.jpg",
      "/images/brochures/filmy-sphere-front.jpg",
      "/images/brochures/preva-systems-front.jpg",
      "/images/brochures/sepik.jpg",
      "/images/brochures/trifold.jpg"
    ]
  },
  {
    id: "logo-brand-identity",
    title: "Logo & Brand Identity",
    category: "Branding, Logo Design",
    image: "/images/logos/akruti-logo-01.jpg",
    description: "Strategic logo and brand identity systems for startups, enterprises, and cultural organizations.",
    size: "large",
    client: "Multiple Clients",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Logo Design", "Brand Identity", "Visual Systems"],
    challenge: "Creating logos that are distinctive, timeless, and highly versatile across print and digital contexts.",
    solution: "A research-driven design process combining brand strategy with bold visual execution.",
    gallery: [
      "/images/logos/akruti-logo-02.jpg",
      "/images/logos/akruti-logo-03.jpg",
      "/images/logos/akruti-logo-05.jpg",
      "/images/logos/akruti-logo-07.jpg",
      "/images/logos/akruti-logo-10.jpg",
      "/images/logos/hampan-logo.jpg",
      "/images/logos/pakati-logo.jpg",
      "/images/logos/geo-logo.jpg",
      "/images/logos/golaundry.jpg",
      "/images/logos/skybell.jpg"
    ]
  },
  {
    id: "film-entertainment-posters",
    title: "Film & Entertainment Posters",
    category: "Poster Design, Film Industry",
    image: "/images/movie-posters/bharate.jpg",
    description: "Cinematic poster designs for Kannada and regional film productions with powerful visual storytelling.",
    size: "small",
    client: "Film Production Houses",
    year: "2023",
    location: "Bangalore, India",
    tags: ["Poster Design", "Film Industry", "Typography"],
    challenge: "Capturing the emotional essence of a film in a single, striking visual composition.",
    solution: "Custom typography and layered image compositing techniques that convey mood and narrative at a glance.",
    gallery: [
      "/images/movie-posters/atrupta.jpg",
      "/images/movie-posters/hottegagi.jpg",
      "/images/movie-posters/jilebi.jpg",
      "/images/movie-posters/kabira.jpg",
      "/images/movie-posters/kiss.jpg",
      "/images/movie-posters/saddu.jpg",
      "/images/movie-posters/bharate-2.jpg"
    ]
  },
  {
    id: "event-posters",
    title: "Event & Promotional Posters",
    category: "Poster Design, Event Marketing",
    image: "/images/posters/euphoric-dimensions.jpg",
    description: "Vibrant promotional posters for live events, fitness studios, and cultural celebrations.",
    size: "medium",
    client: "Multiple Event Organizers",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Poster Design", "Event Marketing", "Print"],
    challenge: "Standing out in high-clutter environments where dozens of competing posters vie for attention.",
    solution: "Bold color hierarchies, dynamic compositions, and attention-commanding typography.",
    gallery: [
      "/images/posters/fitness.jpg",
      "/images/posters/filmy-sphere.jpg",
      "/images/posters/body-rockerzz.jpg",
      "/images/posters/poster-design.jpg",
      "/images/posters/rubrics.jpg",
      "/images/posters/seminar.jpg",
      "/images/posters/simply-satwik.jpg",
      "/images/posters/model-hunt.jpg"
    ]
  },
  {
    id: "roll-up-standees",
    title: "Roll-Up & Display Standees",
    category: "Standee Design, Outdoor Branding",
    image: "/images/standees/proassert.jpg",
    description: "Professional roll-up standees and display boards for brands, clinics, and corporate events.",
    size: "small",
    client: "ProAssert & Others",
    year: "2024",
    location: "Bangalore, India",
    tags: ["Standee Design", "Roll-Up", "Outdoor Branding"],
    challenge: "Delivering eye-catching standees that convey essential brand messages at a glance.",
    solution: "Clean visual hierarchy with strong brand colors, icons, and minimal copy for maximum readability.",
    gallery: [
      "/images/standees/rollup-standee.jpg",
      "/images/standees/cricket-standee.jpg",
      "/images/standees/standee-6x3.jpg",
      "/images/standees/shwetha-prabhu.jpg",
      "/images/standees/solutions-offered.jpg",
      "/images/standees/soundary-fitness.jpg",
      "/images/standees/standee.jpg"
    ]
  },
  {
    id: "premium-invitations",
    title: "Wedding & Event Invitations",
    category: "Invitation Design, Premium Print",
    image: "/images/invitations/wedding-invite.jpg",
    description: "Elegantly crafted invitation cards for weddings, ceremonies, and special occasions.",
    size: "medium",
    client: "Private Clients",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Invitation Design", "Wedding", "Premium Print"],
    challenge: "Translating the personal story and cultural nuances of each client into a unique, heirloom-quality design.",
    solution: "Custom illustrated elements, specialty paper stocks, and meticulous print-finishing processes.",
    gallery: [
      "/images/invitations/bharani-card-1.jpg",
      "/images/invitations/bharani-card-2.jpg",
      "/images/invitations/a5-invitation.jpg",
      "/images/invitations/bday-card.jpg",
      "/images/invitations/marriage.jpg",
      "/images/invitations/dream-house.jpg",
      "/images/invitations/yasheel-birthday.jpg"
    ]
  },
  {
    id: "visiting-cards-stationery",
    title: "Visiting Cards & Stationery",
    category: "Stationery Design, Print",
    image: "/images/vcards/stationery-items.jpg",
    description: "Distinctive visiting cards, letterheads, and envelopes that leave a lasting first impression.",
    size: "large",
    client: "Corporate & Individual Clients",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Visiting Cards", "Stationery", "Corporate Identity"],
    challenge: "Making standard stationery feel premium and memorable while staying within practical print constraints.",
    solution: "Thoughtful typography, strategic use of spot UV, embossing, and die-cutting where budgets allow.",
    gallery: [
      "/images/vcards/akruti-vcard-12.jpg",
      "/images/vcards/akruti-vcard-14.jpg",
      "/images/vcards/acura-card.jpg",
      "/images/vcards/design-tech-front.jpg",
      "/images/vcards/hampan.jpg",
      "/images/vcards/fashion-queens.jpg",
      "/images/vcards/gk.jpg",
      "/images/letterheads/design-tech.jpg",
      "/images/letterheads/gk-venturez.jpg",
      "/images/letterheads/espial.jpg",
      "/images/envelops/hampan.jpg",
      "/images/envelops/designtech.jpg"
    ]
  },
  {
    id: "product-catalogs",
    title: "Product Catalogues",
    category: "Catalogue Design, Print",
    image: "/images/catalogs/adiyogi-catalog.jpg",
    description: "Comprehensive product catalogues showcasing offerings with precision and visual appeal.",
    size: "medium",
    client: "Adiyogi Agro & Others",
    year: "2023",
    location: "Bangalore, India",
    tags: ["Catalogue Design", "Product Photography Layout", "Print"],
    challenge: "Organising hundreds of products into a navigable, visually cohesive printed document.",
    solution: "Modular grid layouts with consistent product photography styling and clear categorisation.",
    gallery: [
      "/images/catalogs/akruti-b-01.jpg",
      "/images/catalogs/akruti-b-02.jpg",
      "/images/catalogs/akruti-b-03.jpg",
      "/images/catalogs/akruti-b-04.jpg",
      "/images/catalogs/akruti-b-05.jpg",
      "/images/catalogs/quickfast.jpg",
      "/images/covers/cover-page.jpg",
      "/images/covers/damayanti.jpg"
    ]
  },
  {
    id: "product-packaging",
    title: "Product Packaging Design",
    category: "Packaging, Label Design",
    image: "/images/packaging/agarbathi-1.jpg",
    description: "Retail-ready packaging and label designs that communicate brand quality at the point of sale.",
    size: "large",
    client: "FMCG & Retail Brands",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Packaging Design", "Label Design", "Retail Branding"],
    challenge: "Designing packaging that competes on crowded retail shelves while meeting print-production specs.",
    solution: "Structural form studies combined with bold, high-contrast surface graphics and compliant label information layouts.",
    gallery: [
      "/images/packaging/agarbathi-2.jpg",
      "/images/packaging/lab-box.jpg",
      "/images/packaging/gas-guard-red.jpg",
      "/images/packaging/gas-guard-yellow.jpg",
      "/images/packaging/kichhanahalli.jpg",
      "/images/packaging/star-box.jpg",
      "/images/packaging/suco.jpg",
      "/images/packaging/ams.jpg",
      "/images/labels/freshon.jpg",
      "/images/labels/freshon-r1.jpg",
      "/images/labels/moringa.jpg",
      "/images/labels/sambhar.jpg"
    ]
  },
  {
    id: "website-design",
    title: "Website & Digital Design",
    category: "Web Design, Digital",
    image: "/images/website/promesa-1.jpg",
    description: "Clean, conversion-focused website designs for businesses looking to make an impact online.",
    size: "small",
    client: "Promesa & Others",
    year: "2024",
    location: "Bangalore, India",
    tags: ["Web Design", "UI/UX", "Digital Branding"],
    challenge: "Translating strong print brand identities into seamless, responsive digital experiences.",
    solution: "Mobile-first layouts with consistent brand language across all screen sizes and interaction states.",
    gallery: [
      "/images/website/promesa-2.jpg",
      "/images/mockups/design-tech-mix.jpg",
      "/images/mockups/adiyogi-mix.jpg",
      "/images/mockups/hampan-mix.jpg",
      "/images/mockups/key-interiors-mix.jpg",
      "/images/mockups/tromino-mix.jpg"
    ]
  },
  {
    id: "restaurant-menus",
    title: "Restaurant Menu Design",
    category: "Menu Design, F&B Branding",
    image: "/images/menus/body-rockerzz-f.jpg",
    description: "Appetite-driven menu designs for restaurants, cafes, and fitness-food brands.",
    size: "small",
    client: "Body Rockerzz & Others",
    year: "2023",
    location: "Bangalore, India",
    tags: ["Menu Design", "F&B", "Print"],
    challenge: "Designing menus that guide the customer journey and upsell effectively through visual hierarchy.",
    solution: "Appetite-evoking food photography layouts paired with clean, readable typography and category dividers.",
    gallery: [
      "/images/menus/body-rockerzz-b.jpg",
      "/images/menus/menu-3x2.jpg",
      "/images/menus/diet-chart-1.jpg",
      "/images/menus/diet-chart-2.jpg",
      "/images/menus/thancos-icecream.jpg",
      "/images/menus/thancos-icecream-2.jpg"
    ]
  },
  {
    id: "certificates-id-cards",
    title: "Certificates & ID Cards",
    category: "Certificates, Corporate Print",
    image: "/images/certificates/certificate.jpg",
    description: "Formal certificates and professional ID card designs for institutions, events, and corporates.",
    size: "medium",
    client: "Institutions & Corporates",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Certificate Design", "ID Cards", "Corporate"],
    challenge: "Balancing official gravitas with aesthetic design in documents that are both functional and impressive.",
    solution: "Authoritative layouts with security-inspired design elements, crests, and premium border treatments.",
    gallery: [
      "/images/certificates/ajjampur.jpg",
      "/images/certificates/ajjampur-2.jpg",
      "/images/certificates/certificate-2.jpg",
      "/images/certificates/certificate-uae.jpg",
      "/images/certificates/preva.jpg",
      "/images/certificates/vidhyadhama.jpg",
      "/images/id-cards/id-card-1.jpg",
      "/images/id-cards/id-card-2.jpg",
      "/images/id-cards/filmy-sphere.jpg",
      "/images/id-cards/adiyogi.jpg",
      "/images/id-cards/bkb.jpg",
      "/images/id-cards/gee-tv.jpg"
    ]
  },
  {
    id: "vouchers-coupons",
    title: "Vouchers & Coupon Design",
    category: "Vouchers, Retail Marketing",
    image: "/images/vouchers/mela-coupon.jpg",
    description: "Eye-catching promotional vouchers and coupon books that drive retail footfall and repeat visits.",
    size: "small",
    client: "Retail & F&B Clients",
    year: "2023",
    location: "Bangalore, India",
    tags: ["Voucher Design", "Coupon", "Retail Print"],
    challenge: "Creating urgency and excitement in a small-format print piece that customers will actually redeem.",
    solution: "Bright, high-contrast color schemes with bold discount figures and clear expiry call-outs.",
    gallery: [
      "/images/vouchers/bharani.jpg",
      "/images/vouchers/coupon.jpg",
      "/images/vouchers/laundry-plus.jpg",
      "/images/tickets/next-youth.jpg",
      "/images/tickets/ticket-1.jpg",
      "/images/tickets/ticket-2.jpg",
      "/images/stickers/dvd-cover.jpg",
      "/images/stickers/sangeetha.jpg"
    ]
  },
  {
    id: "leaflets-pamphlets",
    title: "Leaflets & Pamphlets",
    category: "Leaflet Design, Print Marketing",
    image: "/images/leaflets/bharani.jpg",
    description: "Persuasive leaflets and pamphlets designed to convert prospects at events and doorstep campaigns.",
    size: "medium",
    client: "Various Clients",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Leaflet Design", "Pamphlet", "Print Marketing"],
    challenge: "Delivering a complete brand story in a compact, inexpensive format that people will read.",
    solution: "Scannable visual hierarchy with a single strong CTA and compelling imagery that earns attention.",
    gallery: [
      "/images/leaflets/avs.jpg",
      "/images/leaflets/leaflet-5x7.jpg",
      "/images/leaflets/euphoric.jpg",
      "/images/leaflets/himax.jpg",
      "/images/leaflets/little-toes.jpg",
      "/images/leaflets/soft-skill.jpg",
      "/images/leaflets/swara.jpg",
      "/images/leaflets/skill-pamphlet.jpg",
      "/images/leaflets/workshop.jpg",
      "/images/leaflets/pamplate.jpg",
      "/images/posters/dasara-dollshow.jpg"
    ]
  },
  {
    id: "brand-stationery-suites",
    title: "Complete Brand Stationery Suites",
    category: "Brand Identity, Stationery, Mockups",
    image: "/images/mockups/design-tech-mix.jpg",
    description: "Full stationery suites — logo, card, letterhead, envelope — unified in one brand language.",
    size: "medium",
    client: "Design Tech, Adiyogi, Hampan & Others",
    year: "2023–2024",
    location: "Bangalore, India",
    tags: ["Brand Identity", "Stationery Suite", "Mockups"],
    challenge: "Ensuring every touchpoint — from business card to envelope — feels like it belongs to one brand.",
    solution: "A brand-first process: define the visual DNA first, then systematically apply it across all stationery items.",
    gallery: [
      "/images/mockups/adiyogi-mix.jpg",
      "/images/mockups/hampan-mix.jpg",
      "/images/mockups/key-interiors-mix.jpg",
      "/images/mockups/tromino-mix.jpg",
      "/images/mockups/hoarding.jpg",
      "/images/mockups/brochure-mock.jpg",
      "/images/mockups/billboard-mock.jpg",
      "/images/mugs/faurecia-cup.jpg"
    ]
  },
  {
    id: "book-cover-design",
    title: "Book & Cover Page Design",
    category: "Cover Design, Publishing",
    image: "/images/covers/damayanti.jpg",
    description: "Impactful book covers and publication cover pages that tell a story before a single word is read.",
    size: "small",
    client: "Authors & Publishers",
    year: "2023",
    location: "Bangalore, India",
    tags: ["Cover Design", "Book Design", "Publishing"],
    challenge: "Condensing an entire narrative into a single visual that compels readers to pick up the book.",
    solution: "Evocative imagery paired with considered typography and color palettes that signal genre and tone.",
    gallery: [
      "/images/covers/cover-page.jpg",
      "/images/covers/e-business.jpg",
      "/images/covers/page-2.jpg",
      "/images/covers/praveen.jpg",
      "/images/posters/soundarya-fitness.jpg",
      "/images/posters/oriflame.jpg"
    ]
  }
];
