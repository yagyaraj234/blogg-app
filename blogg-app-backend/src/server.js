import express from "express";
import dotenv from "dotenv";
import { db, connectToDb } from "./db.js";

import fs from "fs";
import admin from "firebase-admin";
const app = express();

const credentials = JSON.parse(fs.readFileSync("./credentials.json"));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

dotenv.config();

const PORT = process.env.PORT || 5500;

// Middlewares
app.use(express.json());
app.use(async (req, res, next) => {
  const { authtoken } = req.headers;
  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      return res.sendStatus(400);
    }
  }
  req.user =req.user || {};
  next();
});

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

// Loading Articles
app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    const likeIds = article.likeIds || [];
    article.canLike = uid && !likeIds.includes(uid);
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

/// Likes

app.put("/api/articles/:name/likes", async (req, res) => {
  const { name } = req.params;
  const {uid}  =req.user;

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    const likeIds = article.likeIds || [];
    const canLike = uid && !likeIds.includes(uid);

    if (canLike) {
      await db.collection("articles").updateOne(
        { name },
        {
          $inc: { likes: 1 },
          $push:{likeIds:uid}
        }
      );
    }
  

  const updatedArticle = await db.collection("articles").findOne({ name });

    res.json(updatedArticle);
  } else {
    res.send("That article doesn't exist");
  }
});

// Comments

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;

  const {  text } = req.body;
  const {email} =req.user;

  await db.collection("articles").updateOne(
    { name },
    {
      $push: { comments: { postedBy:email, text } },
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
  console.log("Db connected Succesfully");
  app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
  });
});
