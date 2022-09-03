import { server } from "../../../config";

const Mask = ({ mask }) => {
  return <div>{mask.name}</div>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/masks`);
  const masks = await res.json();

  const paths = masks.map((mask) => {
    return {
      params: { id: mask.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  let mask;
  try {
    const res = await fetch(`${server}/api/masks/${id}`, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });

    mask = await res.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: { mask },
  };
};

export default Mask;
