import { ProjectProps, DataPropsType } from "../types";

const { Client } = require("@notionhq/client");
import "server-only";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

import { cache } from "react";


export const getAllProjects = cache(async (status?: ProjectProps["status"]) => {
  
  const regex: RegExp = /\/([^\/]+)%2F([^\/]+)\.(jpg|png|gif|mp4)\?/;

  let data: DataPropsType = [];
  const databaseId = "5d2047d1eac643eb9785e83dbfb2fdfc";
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "status",
      status: {
        equals: status,
      },
    },
    sorts: [
      {
        timestamp: "created_time",
        direction: "ascending",
      },
    ],
  });
  response.results.map((res: any) =>
    data = [...data, {
      status: res.properties.status.status.name,
      slug: res.properties.slug.rich_text[0].text.content,
      title: res.properties.title.title[0].text.content,
      tags: res.properties.tags.multi_select.map((tag: any) => tag.name),
      link: res.properties.link.url,
      img: {
        name: res.properties.mainImage.files[0].name
          .match(regex)[2],
        url: res.properties.mainImage.files[0].external.url,
        type: res.properties.mainImage.files[0].name
          .match(regex)[3] === "mp4" ? "video/mp4" : "image",
      },
      description: res.properties.description.rich_text[0].text.content,
      templateB: res.properties.templateB.checkbox,
      firstMedias: res.properties.firstMedias.files.map((file: any) => ({
        name: file.name.match(regex)[2],
        url: file.external.url,
      })),
      secondPartTitle: res.properties.secondPartTitle.rich_text[0]?.text.content,
      secondPartDescription:
        res.properties.secondPartDescription.rich_text[0]?.text.content,
      secondMedias: res.properties.secondMedias.files.map((file: any) => ({
        name: file.name.match(regex)[2],
        url: file.external.url,
        type: file.name
          .match(regex)[3] === "mp4" ? "video/mp4" : "image",
      })),
      wideMedia: res.properties.wideMedia.files.map((file: any) => ({
        name: file.name.match(regex)[2],
        url: file.external.url,
        type: file.name
          .match(regex)[3] === "mp4" ? "video/mp4" : "image",
      })),
      thirdPartTitle: res.properties.thirdPartTitle.rich_text[0]?.text.content,
      thirdPartDescription:
        res.properties.thirdPartDescription.rich_text[0]?.text.content,
      thirdMedia: res.properties.thirdMedia.files.map((file: any) => ({
        name: file.name.match(regex)[2],
        url: file.external.url,
        type: file.name
          .match(regex)[3] === "mp4" ? "video/mp4" : "image",
      })),
      
    }]
  );
  return data;
});

