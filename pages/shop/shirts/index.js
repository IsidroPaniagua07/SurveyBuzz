import { server } from "../../../config";
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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/shirts`);
  const shirts = await res.json();

  return {
    props: {
      shirts,
    },
  };
};

export default index;
