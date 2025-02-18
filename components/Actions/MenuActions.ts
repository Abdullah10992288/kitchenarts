"use server";
import Menu from "@/models/MenuModel";

import ConnectToDb from "@/utils/ConnectToDb";

export const AddMenu = async ({
  title,
  price,
  descryption,
  type,
}: {
  title: string;
  price: string;
  descryption: string;
  type: string;
}) => {
  try {
    await ConnectToDb();
    await Menu.create({ title, price, descryption, type });
  } catch (error) {
    console.log(error);
    throw new Error("FAiled To Add menu!");
  }
};

export const GetMenu = async ({ items }: { items: string }) => {
  try {
    await ConnectToDb();
    const data = await Menu.find({ type: items });
    const menuitems = JSON.parse(JSON.stringify(data));
    return menuitems;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Get Menu Items!");
  }
};

export const DeleteMenuItemFromId = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await ConnectToDb();
    await Menu.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Delete Menu item From Id!");
  }
};
