export const getUser = async () => {
  const res = await fetch("https://randomuser.me/api/");
  return await res.json();
};
