import express from "express";
import dotenv from "dotenv";
import { db, connectToDb } from "./db.js";
dotenv.config();

const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());

// Loading Articles
app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
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

  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { likes: 1 },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article)
  } else {
    res.send("That article doesn't exist");
  }
});

// Comments

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;

  const { postedBy, text } = req.body;

  await db.collection("articles").updateOne(
    { name },
    {
      $push: { comments: { postedBy, text } },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("That article doesn't exist");
  }
});

// Home Page
app.get("/", (req, res) => {
  res.send("Hello");
});

connectToDb(() => {
  console.log('Db connected Succesfully')
  app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
  });
});
