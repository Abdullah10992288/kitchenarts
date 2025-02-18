import mongoose from "mongoose";

const ConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error);
    throw new Error("Failed To Connect To Db");
  }
};

export default ConnectToDb;
