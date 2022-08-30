import Product from "../../components/Card/Card";
import data from "../../data";
import { server } from "../../config";
import Link from "next/link";

const index = ({ categories }) => {
  console.log(categories);
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-fit h-1/5 flex items-center justify-center font-RobotoMono font-bold text-7xl">
        <div className="flex h-fit w-fit bg-gray-100 rounded-2xl shadow justify-center items-center">
          Shop
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full font-Roboto text-xl">
        <div className="flex flex-col h-fit w-3/4 text-left justify-center items-center">
          {categories.map((category) => (
            <Link
              href={`/shop/${category.name.toLowerCase()}`}
              key={category.name}
            >
              <a>
                <h3>Name: {category.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/categories`);
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
};

export default index;
