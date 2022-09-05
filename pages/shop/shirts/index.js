import connectToDatabase from "../../../utils/mongodb";
import Card from "../../../components/Card/Card";

const index = ({ shirts }) => {
  return (
    <div className="flex flex-row gap-2">
      {shirts.map((shirt) => {
        return (
          <div key={shirt.name}>
            <Card name={shirt.name} url={`/shop/shirts/${shirt.id}`} />
          </div>
        );
      })}
    </div>
  );
};

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
