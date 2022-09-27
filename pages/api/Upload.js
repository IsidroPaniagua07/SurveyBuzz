import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { name, description, category, price, image } = JSON.parse(req.body);

  const client = await clientPromise;
  const db = client.db("CaudillsCrafts");
  switch (req.method) {
    case "POST":
      const shirts = await db
        .collection("Products")
        .insertOne({
          name: name,
          description: description,
          category: category,
          price: price,
          image: image,
        });

      res.json({ status: 200, image: shirts });
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
