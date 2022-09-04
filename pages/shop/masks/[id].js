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
  const res = await fetch(`${server}/api/masks/${id}`,
  {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  }
);
  const mask = await res.json();

  return {
    props: { mask: mask },
  };
};

export default Mask;
