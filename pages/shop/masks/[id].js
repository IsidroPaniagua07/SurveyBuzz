import { productData } from "../../../data";
import Card from "../../../components/Card/Card";
import ProductPage from "../../../components/ProductPage/ProductPage";
import connectToDatabase from "../../../utils/mongodb";
import { ObjectId } from "mongodb";

const Mask = ({ mask }) => {
  return <ProductPage name={mask.name} image={mask.image} />;
};

export const getStaticPaths = async () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const masks = productData.masks;
    const paths = masks.map((mask) => {
      return {
        params: { id: mask._id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } else {
    const { db } = await connectToDatabase();
    const masks = await db
      .collection("Products")
      .find({ category: "mask" })
      .toArray();

    const paths = masks.map((mask) => {
      return {
        params: { id: mask._id.toString() },
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
    const masks = productData.masks;
    const data = masks.find((s) => s._id.toString() === id);

    return {
      props: {
        mask: data,
      },
    };
  } else {
    const id = context.params.id;
    const { db } = await connectToDatabase();
    const mask = await db
      .collection("Products")
      .find({ _id: ObjectId(id) })
      .toArray();

    return {
      props: { mask: JSON.parse(JSON.stringify(mask[0])) },
    };
  }
};

export default Mask;
