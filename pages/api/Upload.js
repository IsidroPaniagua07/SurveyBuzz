import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const {image} = req.body
  const client = await clientPromise;
  const db = client.db("CaudillsCrafts")
  switch (req.method) {
  case "POST":
  const shirts = await db
    .collection("Products")
    .find({ type: "shirt" })
    .toArray();
    res.json({ status: 200, data: image, array:shirts });
    // .create({ item: "test", qty: 15, image: image })
    break;
  // let bodyObject = JSON.parse(req.body);
  // let myPost = await db.collection("posts").insertOne(bodyObject);
  // case "GET":
  //   const allPosts = await db.collection("allPosts").find({}).toArray();
  //   res.json({ status: 200, data: allPosts });
  //   break;
  // }
  }
}
