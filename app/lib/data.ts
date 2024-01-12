export type SkillsList =
  | "UX/UI design"
  | "Branding"
  | "Motion"
  | "Dévelopement";

type TileProps = {
  slug: string;
  title: string;
  tags: SkillsType;
  img?: string;
  mainImg?: string;
};

type ImagesProps = {
  url: string;
  width: number;
  height: number;
  mWidth: string;
};

export type SkillsType = SkillsList[];

export type DataPropsType = TileProps[];

export const projects: DataPropsType = [
  {
    slug: "ricaud",
    title: "Dr Pierre Ricaud",
    tags: ["Branding", "UX/UI design", "Dévelopement"],
    img: "/medias/ricaud.jpg",
  },

  {
    slug: "matere",
    title: "Matère",
    tags: ["Branding", "UX/UI design", "Motion", "Dévelopement"],
    img: "/medias/matere.jpg",
    mainImg: "/medias/main.jpg",
  },
  {
    slug: "speakdating",
    title: "Speakdating",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/speakdating.jpg",
  },
  {
    slug: "yooji",
    title: "Yooji",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/yooji.jpg",
  },
  {
    slug: "vy-resort",
    title: "Vy Resort Thermal & Spa",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/francethermes.jpg",
  },
  {
    slug: "revol",
    title: "Revol",
    tags: ["Branding", "UX/UI design", "Motion"],
    img: "/medias/revol.jpg",
  },
  {
    slug: "happyvore",
    title: "Happyvore",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/happyvore.jpg",
  },
  {
    slug: "ocean-kiss",
    title: "Ocean Kiss",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/oceankiss.jpg",
  },
  {
    slug: "le-bourget",
    title: "Le Bourget",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/lebourget.jpg",
  },
  {
    slug: "paramat",
    title: "Paramat",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/paramat.jpg",
  },
  {
    slug: "balanz",
    title: "Balanz",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/balanz.jpg",
  },
];

export const skills: SkillsType = [
  "UX/UI design",
  "Branding",
  "Motion",
  "Dévelopement",
];

export const brandImages: ImagesProps[] = [
  {
    url: "/medias/svg/brandsvg01.svg",
    width: 28,
    height: 40,
    mWidth: "max-lg:w-[14px]",
  },
  {
    url: "/medias/svg/brandsvg02.svg",
    width: 44,
    height: 34,
    mWidth: "max-lg:w-[22px]",
  },
  {
    url: "/medias/svg/brandsvg03.svg",
    width: 45,
    height: 56,
    mWidth: "max-lg:w-[22px]",
  },
  {
    url: "/medias/svg/brandsvg04.svg",
    width: 153,
    height: 42,
    mWidth: "max-lg:w-[76px]",
  },
  {
    url: "/medias/svg/brandsvg05.svg",
    width: 69,
    height: 36,
    mWidth: "max-lg:w-[34px]",
  },
  {
    url: "/medias/svg/brandsvg06.svg",
    width: 109,
    height: 56,
    mWidth: "max-lg:w-[54px]",
  },
  {
    url: "/medias/svg/brandsvg07.svg",
    width: 48,
    height: 48,
    mWidth: "max-lg:w-[24px]",
  },
  {
    url: "/medias/svg/brandsvg08.svg",
    width: 193,
    height: 36,
    mWidth: "max-lg:w-[91px]",
  },
  {
    url: "/medias/svg/brandsvg09.svg",
    width: 122,
    height: 34,
    mWidth: "max-lg:w-[61px]",
  },
  {
    url: "/medias/svg/brandsvg10.svg",
    width: 196,
    height: 25,
    mWidth: "max-lg:w-[98px]",
  },
  {
    url: "/medias/svg/brandsvg11.svg",
    width: 129,
    height: 36,
    mWidth: "max-lg:w-[64px]",
  },
  {
    url: "/medias/svg/brandsvg12.svg",
    width: 216,
    height: 27,
    mWidth: "max-lg:w-[108px]",
  },
  {
    url: "/medias/svg/brandsvg13.svg",
    width: 143,
    height: 32,
    mWidth: "max-lg:w-[71px]",
  },
  {
    url: "/medias/svg/brandsvg14.svg",
    width: 39,
    height: 39,
    mWidth: "max-lg:w-[19px]",
  },
];
