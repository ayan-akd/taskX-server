const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();

// routes
const usersRoutes = require("./routes/users");

applyMiddleware(app);

app.use(usersRoutes);

// const PackageModel = require("./models/PackageModel");
// const GuideModel = require("./models/GuideModel");
// const StoryModel = require("./models/StoryModel");
// app.post("/upload-packages", async (req, res) => {
//   try {
//     const packagesData = req.body;

//     // Insert each package into the MongoDB collection
//     for (const pkg of packagesData) {
//       const newPackage = new StoryModel(pkg);
//       await newPackage.save();
//     }

//     res.status(200).json({
//       message: "Packages inserted into MongoDB collection successfully",
//     });
//     console.log("successfully inserted");
//   } catch (error) {
//     console.error("Error inserting packages into MongoDB:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

app.get("/health", (req, res) => {
  res.send("Service Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
