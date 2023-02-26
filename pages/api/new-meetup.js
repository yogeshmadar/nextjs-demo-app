// /api/new-meetup - POST request

import { MongoClient } from "mongodb";

const handler = async function (req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Connect DB
    const client = await MongoClient.connect(
      "mongodb+srv://yogeshmadar:VFP8dmjqpyoyarvm@cluster0.q88vady.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    // Store in dataBase - MongoDB
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
