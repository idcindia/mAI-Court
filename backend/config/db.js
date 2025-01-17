const mongoose = require("mongoose");
const winston = require("winston");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    if (process.env.NODE_ENV !== "test") {
      winston.info(`Process ${process.pid} is connected to DB`);
    } else {
      winston.info(`Test environment: Process ${process.pid} is connected to DB`);
    }
  } catch (err) {
    winston.error("App starting error: " + err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
