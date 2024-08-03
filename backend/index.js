import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
// Middleware for parsing json
app.use(express.json());
//Middleware for CORS
// OPTION 1
app.use(cors());
//OPTION 2
/*app.use(
  cors({
    origin: "https://localhost/3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type"],
  })
);*/
//Using Routes
app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected to Database Successfully");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
