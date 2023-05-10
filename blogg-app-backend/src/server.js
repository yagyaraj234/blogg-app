import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());

// Loading Articles
app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("react-blog-db");
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404).send("Article Not Found");
  }
});

/// Likes

app.put("/api/articles/:name/likes", async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("react-blog-db");
  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { likes: 1 },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    article.likes += 1;
    res.send(`The ${name} article now has ${article.likes} likes !!!`);
  } else {
    res.send("That article doesn't exist");
  }
});
// Home Page
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
