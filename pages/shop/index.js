// import connectToDatabase from "../../utils/mongodb";
import Card from "../../components/Card/Card";
import { categoryData } from "../../data";

const index = ({ categories }) => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-fit h-1/4 flex items-center justify-center font-RobotoMono font-bold text-5xl">
        <h1 className="flex h-fit w-fit justify-center items-center p-2">
          Shop
        </h1>
      </div>
      <div className="flex justify-center items-center w-full h-full font-Roboto text-xl gap-x-14">
          {categories.map((category) => (
            <div key={category.name}>
              <Card name={category.name} url={`/shop/${category.name}`} />
            </div>
          ))}

      </div>
    </div>
  );
};

export async function getStaticProps() {

  const categories = categoryData


  return {
    props: {
      categories: categories,
    },
  };
}

export default index;

// export async function getStaticProps() {
//   const { db } = await connectToDatabase();

//   const categories = await db
//   .collection("Categories")
//   .find({})
//   .toArray();
//     // .create({ item: "card", qty: 15 })

//   return {
//     props: {
//       categories: JSON.parse(JSON.stringify(categories)),
//     },
//   };
// }

