"use server";

export const addName = async (
  { namesList }: { error: string | undefined; namesList: Array<string> },
  data: FormData
) => {
  const name = data.get("name") as string;

  await new Promise<void>((res) => setTimeout(res, 2000));

  if (name.length <= 3)
    return {
      error: "Name too short",
      namesList,
    };

  if (namesList.includes(name))
    return {
      error: "Name already present",
      namesList,
    };

  namesList.push(name);

  return {
    error: undefined,
    namesList,
  };
};
