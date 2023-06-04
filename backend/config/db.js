import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Db connected successfully at: " + connect.connection.host);
  } catch (error) {
    throw new Error("Could not connect to db: " + error.message);
    process.exit(1);
  }
};
