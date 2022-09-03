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
  let masks;
  try {
    const res = await fetch(`${server}/api/masks`, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    masks = await res.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      masks,
    },
  };
};

export default index;
