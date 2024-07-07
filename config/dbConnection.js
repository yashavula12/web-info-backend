const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://yashadmin:9396.Yash@74.208.96.108:27017/web?authSource=admin"
    );
    console.log("DataBase Connected");
  } catch (err) {
    console.log("error in connecting to DB" + err);
  }
};

module.exports = connectDb;
