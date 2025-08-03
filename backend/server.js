import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("it's working");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
