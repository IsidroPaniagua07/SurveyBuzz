export default async function handler(req, res) {
    const { name, questions } = JSON.parse(req.body);
  
    switch (req.method) {
      case "PUT":
        res.json({ status: 200 });
        break;
      case "POST":
        const client = await clientPromise;
        const db = client.db("SurveyBuzz");
        const result = await db.collection("Results").insertOne({
          name: name,
          questions: questions,
        });
  
        res.json({ status: 200, result });
        break;
    }
  }
  