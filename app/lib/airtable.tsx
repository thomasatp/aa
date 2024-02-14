import "server-only";

import Airtable, { Attachment } from "airtable";
import { cache } from "react";

export type SkillsList =
  | "UX/UI Design"
  | "Branding"
  | "Motion"
  | "Development"
  | "Webmastering";

export type MediaTypes = {
  url: string;
  name: string;
  type: string;
};

export type HeroProps = {
  title?: string;
  description?: string;
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
  wideMedia?: MediaTypes[];
};

type ImagesProps = {
  url: string;
  width: number;
  height: number;
  mWidth: string;
};

export type SkillsType = SkillsList[];

export type DataPropsType = ProjectProps[];

export const skills: SkillsType = [
  "UX/UI Design",
  "Branding",
  "Motion",
  "Development",
  "Webmastering",
];

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  `${process.env.AIRTABLE_BASE_ID}`
);

export const getProjects = async (
  status?: ProjectProps["status"],
  preview?: string,
  maxRecords?: number
) => {
  let data: DataPropsType = [];
  const regex: RegExp = /^(.*?)\.[^\.]*$/;
  const filterFormula = status ? `IF({status} = '${status}', 1, 0)` : "";
  const fields =
    preview === "preview"
      ? ["title", "status", "slug", "image", "tags"]
      : [
          "title",
          "status",
          "slug",
          "image",
          "tags",
          "description",
          "firstMedias",
          "secondPartTitle",
          "secondPartDescription",
          "secondMedias",
          "wideMedia",
        ];
  const resultsNumber = maxRecords ? maxRecords : 100;

  try {
    const records = await base("Projets")
      .select({
        filterByFormula: filterFormula,
        maxRecords: resultsNumber,
        fields: fields,
      })
      .firstPage();

    records.forEach(({ fields }) => {
      const list: ProjectProps = {
        status: fields.status as ProjectProps["status"],
        tags: Array.isArray(fields.tags)
          ? (fields.tags.map((tag: string) => tag) as ProjectProps["tags"])
          : [],
        title: fields.title as ProjectProps["title"],
        slug: fields.slug as ProjectProps["slug"],
        img:
          Array.isArray(fields.image) && fields.image.length > 0
            ? ({
                url: fields.image[0].url,
                name: fields.image[0].filename.match(regex)[1],
                type: fields.image[0].type,
              } as ProjectProps["img"])
            : ({
                url: "",
                name: "",
                type: "",
              } as ProjectProps["img"]),
        description: fields.description as ProjectProps["description"],
        firstMedias: Array.isArray(fields.firstMedias)
          ? (fields.firstMedias.map((img: Attachment) => ({
              url: img.url,
              name: img.filename.match(regex) && img.filename.match(regex)![1],
              type: img.type,
            })) as ProjectProps["firstMedias"])
          : [],
        secondPartTitle:
          fields.secondPartTitle as ProjectProps["secondPartTitle"],
        secondPartDescription:
          fields.secondPartDescription as ProjectProps["secondPartDescription"],
        secondMedias: Array.isArray(fields.secondMedias)
          ? (fields.secondMedias.map((img: Attachment) => ({
              url: img.url,
              name: img.filename.match(regex) && img.filename.match(regex)![1],
              type: img.type,
            })) as ProjectProps["secondMedias"])
          : [],
        wideMedia: Array.isArray(fields.wideMedia)
          ? (fields.wideMedia.map((img: Attachment) => ({
              url: img.url,
              name: img.filename.match(regex) && img.filename.match(regex)![1],
              type: img.type,
            })) as ProjectProps["wideMedia"])
          : [],
      };
      data.push(list);
    });
  } catch (error) {
    console.error(error);
  }
  return data;
};


// Données de la page d'accueil

export const getHomePage = async () => {
  let data: HeroProps = {};
  try {
    const records = await base("Homepage").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as HeroProps["title"],
        description: fields.description as HeroProps["description"],
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
};

// Données de la page projets

export const getWorkPage = async () => {
  let data: HeroProps = {};
  try {
    const records = await base("Workpage").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as HeroProps["title"],
        description: fields.description as HeroProps["description"],
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
};

