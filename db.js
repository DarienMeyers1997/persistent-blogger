const mongoose = require("mongoose");
const connectToMongoose = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToMongoose };
