import videoImg from '../assets/images/video-animation.jpeg';

export interface Service {
  iconName: 'Palette' | 'Printer' | 'Box' | 'Layout' | 'Video' | 'Landmark' | 'Layers';
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    iconName: 'Palette',
    title: "Design & Branding",
    description: "We build brands that not only stand-out but also pull-in the crowd! Unique, befitting and out-of-the-box brand building is our strength!",
    image: "/images/logos/akruti-logo-01.jpg"
  },
  {
    iconName: 'Printer',
    title: "High-Quality Printing",
    description: "Printing through best-in-class hardware which gives unrivalled shading quality consistently and impressively over a wide range of printing solutions.",
    image: "/images/brochures/idea-infinity-1.jpg"
  },
  {
    iconName: 'Box',
    title: "Package Design",
    description: "Only a great package can make your product attractive. We make intuitive and outstanding designs, custom-made just for your business.",
    image: "/images/packaging/agarbathi-1.jpg"
  },
  {
    iconName: 'Layout',
    title: "Outdoor & Indoor Branding",
    description: "We deliver results for your business by providing the best experience for your users. We plan, implement and evaluate while you can sit back and relax!",
    image: "/images/banners/hotel-qsr-1.jpg"
  },
  {
    iconName: 'Video',
    title: "Video & Animation",
    description: "Actions speak louder than words, videos and animations speak much more! We make only the most apt audio and video communications for your business.",
    image: videoImg
  },
  {
    iconName: 'Landmark',
    title: "Stage Design & Production",
    description: "Whether it is a highly efficient stage design or an inventive lighting sequence or even tweaked props, our professionals will give structure to your ideas!",
    image: "/images/stage/stall-design.jpg"
  }
];
