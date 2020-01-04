// @ts-ignore
import db from "../../../../db/dbConfig";
import { UserInputType, UserType } from "./types";

const insertUser = async (user: UserInputType) => {
  const userId = await db("User")
    .insert(user)
    .returning<number[]>("id")
    // @ts-ignore
    .then(([id]) => id);
  return userId;
};

const findUserByFilter = async (filter: any) => {
  const user: UserType = await db("User")
    .where(filter)
    .first();
  return user;
};

export default {
  insertUser,
  findUserByFilter
};
