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
  let shirts;
  try {
      const res = await fetch(`${server}/api/shirts`,
      {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
          Accept: "application/json; charset=UTF-8",
        },
      }
    );
    shirts = await res.json();
} catch (e) {
    console.log(e);
  }

  return {
    props: {
      shirts,
    },
  };
};

export default index;
