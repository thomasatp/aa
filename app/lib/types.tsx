export type SkillsList = string;

export type MediaTypes = {
  url: string;
  name: string;
  type: string;
};

export type HeroProps = {
  title?: string;
  description?: string;
};

export type HeroAboutProps = {
  title?: string;
  description?: string;
  media?: MediaTypes | null;
};

export type ProjectProps = {
  status: string;
  slug: string;
  title: string;
  tags: SkillsType;
  img: MediaTypes;
  description?: string;
  firstMedias?: MediaTypes[];
  secondPartTitle?: string;
  secondPartDescription?: string;
  secondMedias?: MediaTypes[];
  wideMedia?: MediaTypes | null;
  thirdPartTitle?: string;
  thirdPartDescription?: string;
  thirdMedia: MediaTypes | null;
};

type ImagesProps = {
  url: string;
  width: number;
  height: number;
  mWidth: string;
};

export type SkillsType = SkillsList[];

export type DataPropsType = ProjectProps[];