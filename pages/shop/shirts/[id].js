import { productData } from "../../../data";
import Card from "../../../components/Card/Card";
import ProductPage from "../../../components/ProductPage/ProductPage";
import connectToDatabase from "../../../utils/mongodb";

const Shirt = ({ shirt }) => {
  console.log(shirt)
  return <ProductPage name={shirt.name} image={null} />;
};

export const getStaticPaths = async () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const shirts = productData.shirts;
    const paths = shirts.map((shirt) => {
      return {
        params: { id: shirt._id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } else {
      const { db } = await connectToDatabase();
      const shirts = await db
        .collection("Products")
        .find({ type: "shirt" })
        .toArray();

      const paths = shirts.map((shirt) => {
        return {
          params: { id: shirt._id.toString() },
        };
      });
      return {
        paths,
        fallback: false,
    };
  }
};
export const getStaticProps = async (context) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const id = context.params.id;
    const shirts = productData.shirts;
    const data = shirts.find((s) => s._id.toString() === id);

    return {
      props: {
        shirt: data,
      },
    };
  } else {
    const id = context.params.id;
    console.log('THIS IS THE ID: ' + id)
    console.log(typeof(id))
    const { db } = await connectToDatabase();
    const shirt = await db
      .collection("Products")
      .find({ name: 'Mickey Mouse Mask'})
      .toArray()
      // .find({ _id: ObjectId(id) });
      
    return {
      props: { shirt: JSON.parse(JSON.stringify(shirt[0])) },
    };
  }
};
export default Shirt;
