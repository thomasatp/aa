const { Client } = require("@notionhq/client");
import "server-only";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

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
};

export type HeroProps = {
  title?: string;
  description?: string
}

export type ProjectProps = {
  status: string;
  slug: string;
  title: string;
  tags: SkillsType;
  img: {url: string; name: string};
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
export const getAllProjects = cache(async (status?: ProjectProps["status"]) => {
  
  const regex: RegExp = /\/([^\/]+)%2F([^\/]+)\.(jpg|png|mp4)\?/;

  const data: DataPropsType = [];
  const databaseId = process.env.PROJECTS_DATABASE_ID;
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
    data.push({
      status: res.properties.status.status.name,
      slug: res.properties.slug.rich_text[0].text.content,
      title: res.properties.title.title[0].text.content,
      tags: res.properties.tags.multi_select.map((tag: any) => tag.name),
      img: {
        name: res.properties.mainImage.files[0].name
          .match(regex)[2],
        url: res.properties.mainImage.files[0].external.url,
      },
      description: res.properties.description.rich_text[0].text.content,
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
      })),
      wideMedia: res.properties.wideMedia.files.map((file: any) => ({
        name: file.name.match(regex)[2],
        url: file.external.url
      }))
      
    })
  );
  return data;
});

export const getHomepage = cache(async () => {
  const databaseId = process.env.HOMEPAGE_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const data: HeroProps = {
    title: response.results[0].properties.title.title[0].plain_text,
    description: response.results[0].properties.intro.rich_text[0].plain_text,
  };
  return data;
});

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
