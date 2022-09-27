import Image from "next/image";

const ProductPage = ({ name, image }) => {
  return (
    <>
      <div className="flex h-full w-full ">
        <div className="h-full w-4/5 relative">
          <Image
            src={image}
            width="100%"
            height="100%"
            alt={name}
            layout='fill'
          />
        </div>
        <div className="h-full w-1/5 bg-white border-gray-300 border">
          <div className="flex h-[5%] w-full border-b justify-center items-center">
          {name}

          </div>
          <div>
            description
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
