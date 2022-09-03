import { server } from "../../../config";
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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/masks`);
  const masks = await res.json();

  return {
    props: {
      masks,
    },
  };
};

export default index;
