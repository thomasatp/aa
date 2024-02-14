import "server-only";

import Airtable, { Attachment } from "airtable";

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
): Promise<DataPropsType> => {
  // Exclusion de l'extension des médias pour générer le texte alternatif
  const regex: RegExp = /^(.*?)\.[^\.]*$/;
  const allRecords: DataPropsType = [];
  // Filtrer par status
  const filterFormula = status ? `IF({status} = '${status}', 1, 0)` : "";

  // Liste des champs à charger
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

  // Nombre de résultats max
  const resultsNumber = maxRecords ? maxRecords : 100;

  try {
    const records: DataPropsType = await new Promise((resolve, reject) => {
      const allRecords: DataPropsType = [];

      base("Projets")
        .select({
          view: "Grid view",
          filterByFormula: filterFormula,
          maxRecords: resultsNumber,
          fields: fields,
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function ({ fields }) {
              const data: ProjectProps = {
                status: fields.status as ProjectProps["status"],
                tags: Array.isArray(fields.tags)
                  ? (fields.tags.map(
                      (tag: string) => tag
                    ) as ProjectProps["tags"])
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
                      name:
                        img.filename.match(regex) &&
                        img.filename.match(regex)![1],
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
                      name:
                        img.filename.match(regex) &&
                        img.filename.match(regex)![1],
                      type: img.type,
                    })) as ProjectProps["secondMedias"])
                  : [],
                wideMedia: Array.isArray(fields.wideMedia)
                  ? (fields.wideMedia.map((img: Attachment) => ({
                      url: img.url,
                      name:
                        img.filename.match(regex) &&
                        img.filename.match(regex)![1],
                      type: img.type,
                    })) as ProjectProps["wideMedia"])
                  : [],
              };

              allRecords.push(data);
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              reject(err);
            } else {
              resolve(allRecords);
            }
          }
        );
    });
    return records

  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des données depuis Airtable : ${error}`
    );
  }
};

export const getHomePage = async (): Promise<HeroProps> => {
  return new Promise((resolve, reject) => {
    let homeRecords: HeroProps = {};
    base("Homepage")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function ({ fields }) {
            homeRecords = {
              title: fields.title as HeroProps["title"],
              description: fields.description as HeroProps["description"],
            };
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(homeRecords);
          }
        }
      );
  });
};

export const getWorkPage = async (): Promise<HeroProps> => {
  return new Promise((resolve, reject) => {
    let homeRecords: HeroProps = {};
    base("Workpage")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function ({ fields }) {
            homeRecords = {
              title: fields.title as HeroProps["title"],
              description: fields.description as HeroProps["description"],
            };
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(homeRecords);
          }
        }
      );
  });
};
