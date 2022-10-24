import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { name, questions } = JSON.parse(req.body);

  const client = await clientPromise;
  const db = client.db("SurveyBuzz");
  switch (req.method) {
    case "POST":
      const shirts = await db
        .collection("Surveys")
        .insertOne({
          name: name,
          questions: questions,
  
        });

      res.json({ status: 200 });
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
