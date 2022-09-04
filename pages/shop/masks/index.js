
import Card from "../../../components/Card/Card";

const index = ({ masks }) => {
  return (
    <div className="flex flex-row gap-2">
      {masks.map((mask) => {
        return (
          <div key={mask.name}>
            {mask.name}
            {/* <Card name={mask.name} url={`/shop/masks/${mask.id}`} /> */}
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const masks = await db
    .collection("Products")
    // .create({ item: "card", qty: 15 })
    .find({})
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
export default index;
