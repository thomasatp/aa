const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_TOKEN });

import { cache } from "react";

export type SkillsList = "UX/UI Design" | "Branding" | "Motion" | "Development";

type TileProps = {
  slug: string;
  title: string;
  tags: SkillsType;
  img: string;
  mainImg?: string;
  description?: string;
  firstMedias?: any
};

type ImagesProps = {
  url: string;
  width: number;
  height: number;
  mWidth: string;
};

export type SkillsType = SkillsList[];

export type DataPropsType = TileProps[];
export const skills: SkillsType = [
  "UX/UI Design",
  "Branding",
  "Motion",
  "Development",
];

export const getProjects = cache(async () => {
  const data: DataPropsType = [];
  const databaseId = process.env.PROJECTS_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        timestamp: "created_time",
        direction: "ascending",
      },
    ],
  });
  // response.results.forEach((res: any) => {
  //   console.log(res?.properties.mainImage.files[0].file.url);
  // });
  response.results.map((res: any) =>
    data.push({
      slug: res?.properties.slug.rich_text[0].text.content,
      title: res?.properties.title.title[0].text.content,
      tags: res?.properties.tags.multi_select.map((tag: any) => tag.name),
      img: res?.properties.mainImage.files[0].file.url,
      description: res?.properties.description.rich_text[0].text.content,
      firstMedias: res.properties.firstMedias.files.map((file: any) => file.file.url),
    })
  );
  return data;
});

export const getHomepage = cache(async () => {
  const databaseId = process.env.HOMEPAGE_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        timestamp: "created_time",
        direction: "ascending",
      },
    ],
  });
  const data = {
    title: response.results[0].properties.title.title[0].plain_text,
    intro: response.results[0].properties.intro.rich_text[0].plain_text,
  };
  return data;
});
