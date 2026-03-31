import videoImg from '../assets/images/video-animation.jpeg';

export interface Service {
  iconName: 'Palette' | 'Printer' | 'Box' | 'Layout' | 'Video' | 'Landmark' | 'Layers';
  title: string;
  description: string;
  image: string;
  offerings: string[];
}

export const services: Service[] = [
  {
    iconName: 'Palette',
    title: "Design & Branding",
    description: "We build brands that not only stand-out but also pull-in the crowd! Unique, befitting and out-of-the-box brand building is our strength!",
    image: "/images/mockups/adiyogi-mix.jpg",
    offerings: [
      "Logo & Visual Identity Design",
      "Brand Guidelines & Style Manuals",
      "Business Card & Stationery Design",
      "Social Media Branding Kits",
      "Typography & Colour Palette Selection",
      "Brand Refresh & Rebranding"
    ]
  },
  {
    iconName: 'Printer',
    title: "High-Quality Printing",
    description: "Printing through best-in-class hardware which gives unrivalled shading quality consistently and impressively over a wide range of printing solutions.",
    image: "/images/brochures/preva-systems-front.jpg",
    offerings: [
      "Brochures & Catalogues",
      "Flyers, Leaflets & Pamphlets",
      "Large-Format Banners & Hoardings",
      "Posters & Event Collateral",
      "Visiting Cards & Letterheads",
      "Packaging & Label Printing"
    ]
  },
  {
    iconName: 'Box',
    title: "Package Design",
    description: "Only a great package can make your product attractive. We make intuitive and outstanding designs, custom-made just for your business.",
    image: "/images/packaging/lab-box.jpg",
    offerings: [
      "Product Box & Carton Design",
      "Label & Sticker Design",
      "Bottle & Sachet Packaging",
      "Eco-Friendly Packaging Solutions",
      "Gift Box & Hamper Design",
      "Retail Shelf-Ready Packaging"
    ]
  },
  {
    iconName: 'Layout',
    title: "Outdoor & Indoor Branding",
    description: "We deliver results for your business by providing the best experience for your users. We plan, implement and evaluate while you can sit back and relax!",
    image: "/images/banners/banner-11x10.jpg",
    offerings: [
      "Hoardings & Billboards",
      "Retail & Showroom Signage",
      "Exhibition & Trade Show Stalls",
      "Vehicle & Fleet Branding",
      "Wall Murals & Window Graphics",
      "Office & Corporate Interiors"
    ]
  },
  {
    iconName: 'Video',
    title: "Video & Animation",
    description: "Actions speak louder than words, videos and animations speak much more! We make only the most apt audio and video communications for your business.",
    image: videoImg,
    offerings: [
      "Corporate Brand Films",
      "Product Demo & Explainer Videos",
      "2D & 3D Animation",
      "Motion Graphics & Reels",
      "Social Media Video Content",
      "Event Highlight & Recap Videos"
    ]
  },
  {
    iconName: 'Landmark',
    title: "Stage Design & Production",
    description: "Whether it is a highly efficient stage design or an inventive lighting sequence or even tweaked props, our professionals will give structure to your ideas!",
    image: "/images/stage/stage-01.jpg",
    offerings: [
      "Stage & Set Design",
      "Exhibition Stall Fabrication",
      "Event Backdrop & Branding",
      "3D Props & Sculptures",
      "Lighting & AV Coordination",
      "On-Site Installation & Management"
    ]
  }
];
