import { server } from "../../../config";
const Mask = ({ mask }) => {
  return <div>{mask.name}</div>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/masks`);
  const masks = await res.json();

  const paths = masks.map((mask) => {
    return {
      params: { id: mask.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let lol
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://isidropaniagua:J4Ka8QRFffy87VOJ@cluster0.tab1zab.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("CaudillsCrafts").collection("Products");
    if(err)console.log(err)
    console.log('open')

    client.close();
  });
  const id = context.params.id;
  const res = await fetch(`${server}/api/masks/${id}`);
  const mask = await res.json();

  return {
    props: { mask: mask },
  };
};

export default Mask;
