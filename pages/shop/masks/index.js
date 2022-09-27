import connectToDatabase from "../../../utils/mongodb";
import Card from "../../../components/Card/Card";
import { productData } from "../../../data";

const index = ({ masks }) => {
  return (
    <div className="flex flex-row gap-2 h-full w-full justify-center items-center">
      {masks.map((mask) => {
        return (
          <div key={mask.name}>
            <Card name={mask.name} url={`/shop/masks/${mask._id}`} image={mask.image} />

          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {

  const masks = productData.masks

  return {
    props: {
      masks: masks,
    },
  };
}else {
  const { db } = await connectToDatabase();
  const masks = await db
    .collection("Products")
    .find({ type: 'mask' })
    .toArray()

  return {
    props: {
      masks: JSON.parse(JSON.stringify(masks)),
    },
  };
}
}

export default index;
