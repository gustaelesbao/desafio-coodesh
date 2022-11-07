export const fetcher = async (apiURl: string) => {
  const res = await fetch(apiURl);
  const wordInfos = await res.json();

  return wordInfos;
};
