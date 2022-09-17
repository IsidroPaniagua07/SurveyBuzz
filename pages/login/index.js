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
      "https://caudills-crafts.vercel.app/api/Upload/Upload"
    ).then((r) => r.json());
    console.log(res);
  };
  return (
    <>
      <form onSubmit={uploadImage} className="flex flex-col">

        <div className="flex gap-2">
          <label>Name:</label>
          <input className="border border-black"/>
        </div>
        <div className="flex gap-2">
          <label>Description:</label>
          <input className="border border-black"/>
        </div>
        <div className="flex gap-2">
          <label>Price:</label>
          <input className="border border-black"/>
        </div>
        <div className="flex gap-2">
          <label htmlFor="myfile">Upload a photo:</label>
          <input type="file" id="file" name="file" />
        </div>
        <button type="submit" className="border border-black w-fit">
          Submit
        </button>
      </form>
    </>
  );
};

export default index;
