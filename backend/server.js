import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

async function initDB() {
  try {
    await sql;
  } catch (error) {}
}
app.get("/", (req, res) => {
  res.send("it's working");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
