const mongoose = require("mongoose");

const keys = require("./keys");

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};
module.exports = connectDB;
