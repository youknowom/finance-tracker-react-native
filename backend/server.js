import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("it's working");
});

app.listen(5001, () => {
  console.log("server is running on 5001");
});
