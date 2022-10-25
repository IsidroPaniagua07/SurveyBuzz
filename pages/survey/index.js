import { useState } from "react";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    questions: [
      { question: "", input: "boolean" },
      { question: "", input: "numeric" },
    ],
  });
  const addQuestion = () => {
    let newArray = [...data.questions];
    newArray.push({ question: "", input: "boolean" });
    setData((prev) => ({ ...prev, questions: newArray }));
  };
  const deleteQuestion = (index) => {
    let newArray = [...data.questions];
    newArray.splice(index, 1);
    setData((prev) => ({ ...prev, questions: newArray }));
  };
  const editQuestionName = (e) => {
    const { id, value } = e.target;
    let newArray = [...data.questions];
    newArray[id].question = value;
    setData((prev) => ({ ...prev, questions: newArray }));
  };
  const editQuestioninput = (e) => {
    const { id, value } = e.target;
    let newArray = [...data.questions];
    newArray[id].input = value;
    setData((prev) => ({ ...prev, questions: newArray }));
  };

  const handleSubmit = (e) => {
    let server;
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? (server = "http://localhost:3000")
      : (server = "https://surveybuzz.vercel.app/");
    e.preventDefault();
    fetch(
      // development build code

      `${server}/api/upload`,
      {
        method: server==="http://localhost:3000"?"PUT":"POST",
        body: JSON.stringify({
          name: data.name,
          questions: data.questions,
        }),
      }
    )
      .then((r) => r.json())
      .then((r) => {
        if(r.status===200) router.push(`${server}/survey/${server==="http://localhost:3000"?'1':"635763cd7401a7f6069015d6"}`)
      });

    // let res = fetch('http://localhost:3000/api/upload', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
    // .then((res) => res.json())
    // .then((data) => console.log(data))
  };
  return (
    <>
      <div className="flex flex-col h-full w-full text-xl items-center px-2 bg-[#f1f5f9]">
        <input
          className="bg-white text-3xl mb-6 text-center p-2 mt-2 border border-slate-400 bg-inherit"
          placeholder="Name your survey"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <form
          className="flex flex-col h-fit w-full items-center gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          {data.questions.map((obj, index) => {
            return (
              <div key={index} className="flex flex-row gap-2 w-full">
                <input
                  id={index}
                  placeholder={
                    index === 0 ? "Type your question here..." : null
                  }
                  className="border border-black w-full"
                  value={obj.question}
                  onChange={(e) => editQuestionName(e)}
                />
                <select
                  defaultValue={obj.input}
                  id={index}
                  className="border border-black"
                  onChange={(e) => editQuestioninput(e)}
                >
                  <option value="boolean">True or False</option>
                  <option value="numeric">Numeric</option>
                </select>
                <button id={index} onClick={(e) => deleteQuestion(e.target.id)}>
                  X
                </button>
              </div>
            );
          })}
        </form>
        <div className="flex py-6 gap-6">
          <button
            className="flex text-xl border-black border rounded-md px-2"
            onClick={addQuestion}
          >
            Add another question
          </button>
          <button
            className="flex text-xl border-black border rounded-md px-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
