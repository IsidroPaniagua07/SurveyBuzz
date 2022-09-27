import connectToDatabase from "../../../utils/mongodb";
import { productData } from "../../../data";
import Card from "../../../components/Card/Card";

const index = ({ shirts }) => {
  return (
    <div className="flex flex-row gap-2 h-full w-full justify-center items-center">
      {shirts.map((shirt) => {
        return (
          <div key={shirt.name}>
            <Card name={shirt.name} url={`/shop/shirts/${shirt._id}`} image={shirt.image} />
          </div>
        );
      })}
    </div>
  );
};



export async function getStaticProps() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {

  const shirts = productData.shirts

  return {
    props: {
      shirts: shirts,
    },
  };
}else {
  const { db } = await connectToDatabase();
  const shirts = await db
    .collection("Products")
    .find({ category: 'shirt' })
    .toArray()

  return {
    props: {
      shirts: JSON.parse(JSON.stringify(shirts)),
    },
  };
}
}

export default index;
