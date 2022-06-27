import { queryObject } from "@constants/queryObject";

export const pathGet = (query: string): { error: boolean; message: string } => {
  const nameSearch = Object.keys(queryObject.user.name).find(
    //@ts-ignore
    (key: any) => queryObject.user.name[key] === query
  );
  if (nameSearch)
    return { error: false, message: `queryObject.user.name.${nameSearch}` };

  const locationSearch = Object.keys(queryObject.user.location).find(
    //@ts-ignore
    (key: any) => queryObject.user.location[key] === query
  );
  if (locationSearch)
    return {
      error: false,
      message: `queryObject.user.location.${locationSearch}`,
    };

  return { error: true, message: "Cannot find query" };
};
