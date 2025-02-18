"use server";
import Subscriber from "@/models/SubscriberModel";
import ConnectToDb from "@/utils/ConnectToDb";

export const AddSubscriber = async ({ email }: { email: string }) => {
  try {
    await ConnectToDb();
    const exist = await Subscriber.find({ email });
    if (exist.length > 0) {
      return;
    }
    await Subscriber.create({ email });
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Add Subscriber");
  }
};

export const GetSubscribers = async () => {
  try {
    await ConnectToDb();
    const Subscribers = await Subscriber.find();
    return Subscribers;
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Get Subscribers!");
  }
};
