type SkillsList = "UX/UI design" | "Branding" | "Motion" | "Dévelopement";

type TileProps = {
  title: string;
  tags: SkillsType;
  img?: string;
  position?: string;
};

type ImagesProps = {
  url: string;
  width: number;
  height: number;
};

export type SkillsType = SkillsList[];

export type DataPropsType = TileProps[];

export const projects: DataPropsType = [
  {
    title: "Dr Pierre Ricaud",
    tags: ["Branding", "UX/UI design", "Dévelopement"],
    img: "/medias/ricaud.png",
  },
  {
    title: "Happyvore",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/happyvore.png",
  },
  {
    title: "Matère",
    tags: ["Branding", "UX/UI design", "Motion"],
    img: "/medias/img2.jpg",
  },
  {
    title: "Dr Pierre Ricaud",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/ricaud.png",
    position: "middle",
  },
  {
    title: "Dr Pierre Ricaud",
    tags: ["Branding", "UX/UI design"],
    img: "/medias/ricaud.png",
  },
  {
    title: "Dr Pierre Ricaud",
    tags: ["Branding", "UX/UI design", "Motion"],
    img: "/medias/ricaud.png",
    position: "end",
  },
];

export const skills: SkillsType = [
  "UX/UI design",
  "Branding",
  "Motion",
  "Dévelopement",
];

export const brandImages: ImagesProps[] = [
  { url: "/medias/svg/brandsvg01.svg", width: 28, height: 40 },
  { url: "/medias/svg/brandsvg02.svg", width: 44, height: 34 },
  { url: "/medias/svg/brandsvg03.svg", width: 45, height: 56 },
  { url: "/medias/svg/brandsvg04.svg", width: 153, height: 42 },
  { url: "/medias/svg/brandsvg05.svg", width: 69, height: 36 },
  { url: "/medias/svg/brandsvg06.svg", width: 109, height: 56 },
  { url: "/medias/svg/brandsvg07.svg", width: 48, height: 48 },
  { url: "/medias/svg/brandsvg08.svg", width: 193, height: 36 },
  { url: "/medias/svg/brandsvg09.svg", width: 122, height: 34 },
  { url: "/medias/svg/brandsvg10.svg", width: 196, height: 25 },
  { url: "/medias/svg/brandsvg11.svg", width: 129, height: 36 },
  { url: "/medias/svg/brandsvg12.svg", width: 216, height: 27 },
  { url: "/medias/svg/brandsvg13.svg", width: 143, height: 32 },
  { url: "/medias/svg/brandsvg14.svg", width: 39, height: 39 },
];
