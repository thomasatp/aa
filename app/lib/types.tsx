export type SkillsList = string;

export type MediaTypes = {
  url: string;
  name: string;
  type: string;
};

export type MediaProps = {
  url: string | any;
  name: string;
  type?: string;
  cover?: boolean
};

export type HeroProps = {
  title?: string;
  description?: string;
  metatitle?: string;
  metadescription?: string
};

export type NavProps = {
  category?: string;
  url?: string;
  order?: number
};

export type LegalHeroProps = {
  title?: string;
  description?: string;
  metatitle?: string;
  metadescription?: string
};

export type HeroAboutProps = {
  title?: string;
  description?: string;
  media?: MediaTypes | null;
  metatitle?: string;
  metadescription?: string
};

export type PeopleProps = {
  name: string;
  job: string;
  media: MediaTypes | null;
  order?: number
};

export type HeroWorkProps = {
  title?: string;
  description?: string;
  rupture?: string;
  metatitle?: string;
  metadescription?: string
};

export type NoticesProps = {
  title?: string;
  description?: string;
  metatitle?: string;
  metadescription?: string
};

export type AboutSkillProps = {
  title: string;
  description: string;
  skill: string;
};

export type ProjectProps = {
  status: string;
  slug: string;
  title: string;
  tags: SkillsType;
  link?: string;
  img: MediaTypes;
  description?: string;
  templateB?: boolean | undefined;
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