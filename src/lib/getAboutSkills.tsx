import base from "./airtable";
import { cache } from "react";
import { AboutSkillProps } from "./types";

export const getAboutSkills = cache(async () => {
  let data: AboutSkillProps[] = [];
  let data2: AboutSkillProps[] = [];
  try {
    const records = await base("Aboutskills").select().firstPage();
    records.forEach(({ fields }) => {
      data = [
        ...data,
        {
          title: fields.title as AboutSkillProps["title"],
          description: fields.description as AboutSkillProps["description"],
          skill: fields.skill as AboutSkillProps["skill"],
        },
      ];
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});
