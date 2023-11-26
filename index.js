import express from "express";
import loginRoute from "./routes/auth.js";
import sessionsRoute from "./routes/sessions.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = 3001;

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB is online"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api", loginRoute);
app.use("/api", sessionsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
