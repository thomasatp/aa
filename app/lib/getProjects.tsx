import base from "./airtable";
import { Attachment } from "airtable";
import { cache } from "react";
import { ProjectProps, DataPropsType } from "./types";

export const getProjects = cache(
  async (
    status?: ProjectProps["status"],
    preview?: string,
    maxRecords?: number
  ) => {
    let data: DataPropsType = [];
    const regex: RegExp = /^(.*?)\.[^\.]*$/;
    const filterFormula = status ? `IF({status} = '${status}', 1, 0)` : "";
    const fields =
      preview === "preview"
        ? ["title", "description", "status", "slug", "image", "tags"]
        : [
            "title",
            "status",
            "slug",
            "image",
            "tags",
            "link",
            "description",
            "templateB",
            "firstMedias",
            "secondPartTitle",
            "secondPartDescription",
            "secondMedias",
            "wideMedia",
            "thirdPartTitle",
            "thirdPartDescription",
            "thirdMedia",
          ];
    const resultsNumber = maxRecords ? maxRecords : 100;

    try {
      const records = await base("Projects")
        .select({
          filterByFormula: filterFormula,
          maxRecords: resultsNumber,
          fields: fields,
        })
        .firstPage();

      records.forEach(({ fields }) => {
        data = [
          ...data,
          {
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
            link: fields.link as ProjectProps["link"],
            description: fields.description as ProjectProps["description"],
            templateB: fields.templateB as ProjectProps["templateB"],
            firstMedias: Array.isArray(fields.firstMedias)
              ? (fields.firstMedias.map((img: Attachment) => ({
                  url: img.url,
                  name:
                    img.filename.match(regex) && img.filename.match(regex)![1],
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
                    img.filename.match(regex) && img.filename.match(regex)![1],
                  type: img.type,
                })) as ProjectProps["secondMedias"])
              : [],
            wideMedia:
              Array.isArray(fields.wideMedia) && fields.wideMedia.length > 0
                ? ({
                    url: fields.wideMedia[0].url,
                    name: fields.wideMedia[0].filename.match(regex)[1],
                    type: fields.wideMedia[0].type,
                  } as ProjectProps["wideMedia"])
                : null,
            thirdPartTitle:
              fields.thirdPartTitle as ProjectProps["thirdPartTitle"],
            thirdPartDescription:
              fields.thirdPartDescription as ProjectProps["thirdPartDescription"],
            thirdMedia:
              Array.isArray(fields.thirdMedia) && fields.thirdMedia.length > 0
                ? ({
                    url: fields.thirdMedia[0].url,
                    name: fields.thirdMedia[0].filename.match(regex)[1],
                    type: fields.thirdMedia[0].type,
                  } as ProjectProps["thirdMedia"])
                : null,
          },
        ];
      });
    } catch (error) {
      console.error(error);
    }
    return data;
  }
);
