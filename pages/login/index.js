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
    console.log(data.url)
    let res = await fetch('http://localhost:3000/api/Upload/Upload').then(r=>r.json())
  };
  return (
    <>
      <form onSubmit={uploadImage}>
        <label htmlFor="myfile">Select a file:</label>
        <input type="file" id="file" name="file" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default index;
