"use server";

import Contact from "@/models/ContactModel";
import ConnectToDb from "@/utils/ConnectToDb";

export const AddContact = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    await ConnectToDb();
    await Contact.create({ name, email, message });
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Add Contact!");
  }
};

export const GetContacts = async () => {
  try {
    await ConnectToDb();
    const contacts = await Contact.find();
    return contacts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Get Contacts!");
  }
};
