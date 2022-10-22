import { useState } from "react";


// 
// 
export default function Create() {
  const [data, setData] = useState({
    name: "",
    questions: [
      { question: "", input: "boolean" },
      { question: "", input: "numeric" },
    ],
  });
  const addQuestion = () => {
    setData((prevState) => ({
      questions: [...prevState.questions, { question: "", input: "boolean" }],
    }));
    console.log(data);
  };
  const deleteQuestion = (index) => {
    let newArray = [...data.questions];
    newArray.splice(index, 1);
    setData({ questions: newArray });
    console.log(newArray);
  };
  const editQuestionName = (e) => {
    const { id, value } = e.target;
    let newArray = [...data.questions];
    newArray[id].question = value;
    setData({ questions: newArray });
  };
  const editQuestioninput = (e) => {
    const { id, value } = e.target;
    let newArray = [...data.questions];
    newArray[id].input = value;
    setData({ questions: newArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col h-full w-full text-xl items-center px-2 bg-[#f1f5f9]">
        <input
          className="bg-white text-3xl mb-6 text-center p-2 mt-2 border border-slate-400 bg-inherit"
          placeholder="Name your survey"
          onChange={(e) => setData({ ...data, data: e.target.value })}
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
                  <option value="numeric">Numeric</option>
                  <option value="boolean">True or False</option>
                </select>
                <button id={index} onClick={(e) => deleteQuestion(e.target.id)}>
                  X
                </button>
              </div>
            );
          })}
        </form>
        <div className="flex py-6">
          <button
            className="flex text-xl border-black border rounded-md px-2"
            onClick={addQuestion}
          >
            Add another question
          </button>
        </div>
      </div>
    </>
  );
}
