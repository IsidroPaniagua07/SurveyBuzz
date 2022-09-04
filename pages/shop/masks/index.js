import { server } from "../../../config";
import Card from "../../../components/Card/Card";

const index = ({ masks }) => {
  return (
    <div className="flex flex-row gap-2">
      {masks.map((mask) => {
        return (
          <div key={mask.name}>
            <Card name={mask.name} url={`/shop/masks/${mask.id}`} />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://isidropaniagua:<password>@cluster0.tab1zab.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
  const res = await fetch(`${server}/api/masks`);
  const masks = await res.json();

  return {
    props: {
      masks,
    },
  };
};

export default index;
