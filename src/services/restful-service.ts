import { config } from "../config";

export const getUser = async () => {
  const res = await fetch(config.randomUserApi);
  return await res.json();
};
