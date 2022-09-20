import React from "react";

const ProductPage = ({ name, image }) => {
  return (
    <>
      <div className="flex h-full w-full ">
        <div className="h-full w-4/5">
        {name}

        </div>
        <div className="h-full w-1/5 bg-white rounded-md border-gray-300 border">

        </div>
      </div>
    </>
  );
};

export default ProductPage;
