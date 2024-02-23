import base from "./airtable";
import { cache } from "react";
import { NavProps } from "./types";


export const getNavigation = cache(async () => {
  let data: NavProps[] = [];
  try {
    const records = await base("Navigation").select({ sort: [{ field: "order", direction: "asc" }] }).firstPage();
    records.forEach(({ fields }) => {
      data = [...data, {
        category: fields.category as NavProps["category"],
        url: fields.url as NavProps["url"],
      }];
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});