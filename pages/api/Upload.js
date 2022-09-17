import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const {image} = req.body
  const client = await clientPromise;
  const db = client.db("CaudillsCrafts")
  const shirts = await db
    .collection("Products")
    .create({ item: "test", qty: 15, image: image })
  // switch (req.method) {
  // case "POST":
  // let bodyObject = JSON.parse(req.body);
  // let myPost = await db.collection("posts").insertOne(bodyObject);
  // res.json({ status: 200, data: req.body });
  // break;
  // case "GET":
  //   const allPosts = await db.collection("allPosts").find({}).toArray();
  //   res.json({ status: 200, data: allPosts });
  //   break;
  // }
}
