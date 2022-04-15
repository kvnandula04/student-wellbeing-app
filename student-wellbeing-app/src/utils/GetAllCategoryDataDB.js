import { connectToDB } from "./GeneralDBFunc";

export const getAllCategoryData = (category, setData) => {
  const db = connectToDB();
  db.transaction();
};
