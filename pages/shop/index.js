import connectToDatabase from "../../utils/mongodb";
import Card from "../../components/Card/Card";

const index = ({ categories }) => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-fit h-1/5 flex items-center justify-center font-RobotoMono font-bold text-7xl">
        <div className="flex h-fit w-fit bg-gray-100 rounded-2xl shadow justify-center items-center">
          Shop
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full font-Roboto text-xl">
        <div className="flex flex-row h-fit w-3/4 text-left justify-center items-center gap-2">
          {categories.map((category) => (
            <div key={category.name}>
              <Card name={category.name} url={`/shop/`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const categories = await db
    .collection("Products")
    .find({ type: "mask" })
    .toArray();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}

export default index;
