import base from "./airtable";
import { cache } from "react";
import { HeroProps } from "./types";


export const getHomePage = cache(async () => {
  let data: HeroProps = {};
  try {
    const records = await base("Homepage").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as HeroProps["title"],
        description: fields.description as HeroProps["description"],
        metatitle: fields.metatitle as HeroProps["metatitle"],
        metadescription: fields.metadescription as HeroProps["metadescription"],
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});