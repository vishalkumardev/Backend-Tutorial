const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
