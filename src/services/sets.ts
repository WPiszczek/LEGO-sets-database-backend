import config from "../config";
import { Set } from "../types";
import db from "./db";

export const getAllSets = async (offset: number = 0, limit: number = 10) => {
  return await db().select().from<Set>("lego_sets").limit(limit).offset(offset);
};
