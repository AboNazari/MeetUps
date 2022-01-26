//POST /api/new-meetup
import { error } from "console";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://Abdullah:h234asdf@asdf%#asdf@clusterabo.c9i6p.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupCollection = db.collection("meetups");
      const result = await meetupCollection.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({ message: "Meetup Inserted!" });
    } catch (err) {
      res.status(400).json({ message: "something went wronge!" });
    }
  }
}

export default handler;
