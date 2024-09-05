import base from "./airtable";
import { cache } from "react";
import { NoticesProps } from "./types";


export const getLegalNotices = cache(async () => {
  let data: NoticesProps[] =[];
  try {
    const records = await base("Legalnotices").select({sort: [{field: "position", direction: "asc"}]}).firstPage();
    records.forEach(({ fields }) => {
      data = [...data, {
        title: fields.title as NoticesProps["title"],
        description: fields.description as NoticesProps["description"],
      }];
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});