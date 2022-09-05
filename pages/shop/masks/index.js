import connectToDatabase from "../../../utils/mongodb";
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

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const masks = await db
    .collection("Products")
    .find({ type: "mask" })
    .toArray();

  return {
    props: {
      masks: JSON.parse(JSON.stringify(masks)),
    },
  };
}

export default index;
