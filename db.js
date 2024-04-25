const mongoose = require("mongoose");

const connection_string = "mongodb://localhost:27017/registersystem";

function connectToDb() {
  mongoose.connect(connection_string);

  mongoose.connection.on("connected", () => {
    console.log("Connection to MongoDB successful");
  });

  mongoose.connection.on("error", () => {
    console.log("An error occured");
  });
};

module.exports = { connectToDb };