import { useEffect, useState } from "react";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputData, setInputData] = useState({
    name: "",
    description: "",
    category: "mask",
    price: "",
    image: "",
  });
  let server;
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? (server = "http://localhost:3000")
    : (server = "https://caudills-crafts.vercel.app");
  const uploadImage = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "uploads");

    const imageData = await fetch(
      "https://api.cloudinary.com/v1_1/caudillscrafts/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    console.log(imageData.url);
    let res = await fetch(
      // development build code

      `${server}/api/Upload`,
      {
        method: "POST",
        body: JSON.stringify({
          name: inputData.name,
          description: inputData.description,
          category: inputData.category,
          price: inputData.price,
          image: imageData.url,
        }),
      }
    ).then((r) => r.json());
    console.log(res);
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);
  return (
    <div className="flex h-full w-full  justify-center items-center">
      <form onSubmit={uploadImage} className="flex w-fit h-fit flex-col gap-4">
        <div className="flex justify-between">
          <label>Name:</label>
          <input
            id="name"
            onChange={(e) => handleOnChange(e)}
            className="border border-black"
          />
        </div>
        <div className="flex justify-between">
          <label>Description:</label>
          <input
            id="description"
            onChange={(e) => handleOnChange(e)}
            className="border border-black"
          />
        </div>
        <div className="flex justify-between">
          <label>Category:</label>
          <select
            id="category"
            onChange={(e) => handleOnChange(e)}
            className="border border-black"
          >
            <option value="mask">Mask</option>
            <option value="shirt">Shirt</option>
          </select>
        </div>
        <div className="flex justify-between">
          <label>Price:</label>
          <input
            id="price"
            onChange={(e) => handleOnChange(e)}
            className="border border-black"
          />
        </div>
        <div className="flex flex-col justify-between ">
          <label htmlFor="myfile">Upload a photo:</label>
          <input type="file" id="file" name="file" />
        </div>
        <button type="submit" className="border border-black w-fit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default index;
