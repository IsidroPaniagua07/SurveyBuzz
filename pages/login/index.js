const index = () => {
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
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/caudillscrafts/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    console.log(data.url);
    let res = await fetch(
      "https://caudills-crafts.vercel.app/api/Upload"
    ).then((r) => r.json());
    console.log(res);
  };
  return (
    <div className="flex h-full w-full  justify-center items-center">
      <form onSubmit={uploadImage} className="flex w-fit h-fit flex-col gap-4">

        <div className="flex justify-between">
          <label>Name:</label>
          <input className="border border-black"/>
        </div>
        <div className="flex justify-between">
          <label>Description:</label>
          <input className="border border-black"/>
        </div>
        <div className="flex justify-between">
          <label>Price:</label>
          <input className="border border-black"/>
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
