const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./routes/userRoute.js");

const cors = require("cors");
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connection is successfully");
    app.listen(PORT, () => {
      console.log(`connection is at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", router);
