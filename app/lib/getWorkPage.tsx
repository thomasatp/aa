import base from "./airtable";
import { cache } from "react";
import { HeroProps } from "./types";


export const getWorkPage = cache(async () => {
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
});
