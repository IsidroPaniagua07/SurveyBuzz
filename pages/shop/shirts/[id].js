import { server } from "../../../config";

const Shirt = ({ shirt }) => {
  return <div>{shirt.name}</div>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/shirts`);
  const shirts = await res.json();

  const paths = shirts.map((shirt) => {
    return {
      params: { id: shirt.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  let shirt;
  try {
    const res = await fetch(`${server}/api/shirts/${id}`, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    shirt = await res.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      shirt,
    },
  };
};

export default Shirt;
