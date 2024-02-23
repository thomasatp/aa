import base from "./airtable";
import { cache } from "react";
import { LegalHeroProps } from "./types";


export const getLegalPage = cache(async () => {
  let data: LegalHeroProps = {};
  try {
    const records = await base("Legalpage").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as LegalHeroProps["title"],
        description: fields.description as LegalHeroProps["description"],
        metatitle: fields.metatitle as LegalHeroProps["metatitle"],
        metadescription: fields.metadescription as LegalHeroProps["metadescription"],
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});