//POST /api/new-meetup
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://Abdullah:h234asdf@asdf%#asdf@clusterabo.c9i6p.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();
      res.status(200).json({ message: "Meetup Inserted!" });
    } catch (err) {
      res.status(500).json({ message: "failed to load data" });
    }
  }
}
