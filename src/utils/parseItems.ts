import csv from "csvtojson";

const parseItems = async (path: string) => {
  return await csv().fromFile(path);
};

export default parseItems;
