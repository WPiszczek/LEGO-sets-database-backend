import { Set } from "../types";
import db from "./db";

export const getAllSets = async (
  offset: number = 0,
  limit: number = 10,
  name: string
) => {
  if (name !== "") {
    return await db()
      .select()
      .from<Set>("lego_sets")
      .whereILike("name", `%${name}%`)
      .orWhereILike("category", `%${name}%`)
      .limit(limit)
      .offset(offset);
  }
  return await db().select().from<Set>("lego_sets").limit(limit).offset(offset);
};

export const addSet = async (set: Set) => {
  return await db().insert(set).into("lego_sets");
};

export const updateSet = async (id: string, set: Set) => {
  return await db("lego_sets").where({ id }).update(set);
};

export const deleteSet = async (id: string) => {
  return await db("lego_sets").where({ id }).del();
};
