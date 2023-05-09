import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
