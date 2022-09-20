import connectToDatabase from "../../../utils/mongodb";
import { productData } from "../../../data";
import Card from "../../../components/Card/Card";

const index = ({ shirts }) => {
  return (
    <div className="flex flex-row gap-2">asd
      {shirts.map((shirt) => {
        return (
          <div key={shirt.name}>
            <Card name={shirt.name} url={`/shop/shirts/${shirt._id}`} />
          </div>
        );
      })}
    </div>
  );
};

// export async function getStaticProps() {
  // const { db } = await connectToDatabase();

//   const shirts = productData.shirts


//   return {
//     props: {
//       shirts: shirts,
//     },
//   };
// }
export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const shirts = await db
    .collection("Products")
    .find({ type: "shirt" })
    .toArray();

  return {
    props: {
      shirts: JSON.parse(JSON.stringify(shirts)),
    },
  };
}

export default index;
