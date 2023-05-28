const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes/bookRoutes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// dbConnection
const mongoosedb = require("./dbcon/condb");
mongoosedb();

// middleware
app.use("/books", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
