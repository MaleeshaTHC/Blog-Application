import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
// import cors from "cors";
const app = express();
app.use(express.json());

app.use("/api/user", router) 

// app.use(cors());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://BlogWebsite:BlogWebsite@cluster0.4x97p.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 4000")
  )
  .catch((err) => console.log(err));
