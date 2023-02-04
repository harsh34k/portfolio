// import express from "express";

// import { MongoClient } from "mongodb";
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/testDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("MongoDB connection is successful.");
// });

// const app = express();
// const url = "mongodb://localhost:27017/";
// MongoClient.connect(url, (err, client) => {
//   if (err) {
//     console.log("Error: ", err);
//     return;
//   }
//   const db = client.db("contact_form");
//   console.log("Connected to MongoDB");
// });
// app.post("/submit-form", (req, res) => {
//     const formData = req.body;
//     db.collection("submissions").insertOne(formData, (err, result) => {
//       if (err) {
//         console.log("Error: ", err);
//         return;
//       }
//       console.log("Form data saved in MongoDB");
//       res.send("Form submitted successfully");
//     });
//   });
//   app.listen(3000, () => {
//     console.log("Server is running on port 3000");
//   });
//   import { urlencoded, json } from "body-parser";
//   app.use(urlencoded({ extended: false }));
//   app.use(json());
      