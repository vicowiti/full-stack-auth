const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connectParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const connect = await mongoose.connect(
      process.env.MONGO_URI,
      connectParams
    );

    console.log("Connection successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectToDB,
};
