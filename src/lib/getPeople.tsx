import base from "./airtable";
import { cache } from "react";
import { PeopleProps } from "./types";

export const getPeople = cache(async () => {
  let data: PeopleProps[] = [];
  const regex: RegExp = /^(.*?)\.[^\.]*$/;
  try {
    const records = await base("People")
      .select({ sort: [{ field: "order", direction: "asc" }] })
      .firstPage();
    records.forEach(({ fields }) => {
      data = [
        ...data,
        {
          name: fields.name as PeopleProps["name"],
          job: fields.job as PeopleProps["job"],
          media:
            Array.isArray(fields.profilepic) && fields.profilepic.length > 0
              ? ({
                  url: fields.profilepic[0].url,
                  name: fields.profilepic[0].filename.match(regex)[1],
                  type: fields.profilepic[0].type,
                } as PeopleProps["media"])
              : ({
                  url: "",
                  name: "",
                  type: "",
                } as PeopleProps["media"]),
          order: fields.order as PeopleProps["order"],
        },
      ];
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});
