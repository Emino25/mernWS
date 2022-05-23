const mongoose = require("mongoose");
const connectDB = async () => {
  // process.env.mongo_url
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  };
  try {
    await mongoose.connect(
      process.env.mongo_url,
      opts
    );
    console.log("The Database is CONNECTED .....");
  } catch (error) {
    console.log(error);
  }
};

//do not forget to export !!!!!!
module.exports = connectDB;
