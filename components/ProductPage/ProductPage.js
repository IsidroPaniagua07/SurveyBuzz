import Image from "next/image";

const ProductPage = ({ name, image }) => {
  return (
    <>
      <div className="flex h-full w-full ">
        <div className="h-full w-4/5">
        <Image
            src={image}
            // layout='fill'
            width="100%"
            height="100%"
            alt={name}
            className=""
          />
        </div>
        <div className="h-full w-1/5 bg-white rounded-md border-gray-300 border">
        {name}

        </div>
      </div>
    </>
  );
};

export default ProductPage;
