import connectToDatabase from "../../../utils/mongodb";

const Mask = ({ mask }) => {
  console.log(JSON.stringify(mask));
  return <div>{mask.name}</div>;
};

// export const getStaticPaths = async () => {
//   const { db } = await connectToDatabase();

//   const masks = await db
//     .collection("Products")
//     .find({ type: "mask" })
//     .toArray();

//   const paths = masks.map((mask) => {
//     return {
//       params: { id: mask._id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const id = context.params.id;

  const mask = await db.collection("Products").find({ _id: id });

  return {
    props: {
      mask: JSON.parse(JSON.stringify(mask)),
    },
  };
}

export default Mask;
