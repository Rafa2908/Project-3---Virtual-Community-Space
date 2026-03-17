import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./config/database.js";
import artistRouter from "./routes/artistsRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use("/", artistRouter);

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});
