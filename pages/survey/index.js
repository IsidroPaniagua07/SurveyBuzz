import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../components/Modal/Modal";
import Link from "next/link";

export default function Create() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [surveyId, setSurveyId] = useState(null);
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
        method: server === "http://localhost:3000" ? "PUT" : "POST",
        body: JSON.stringify({
          name: data.name,
          questions: data.questions,
        }),
      }
    )
      .then((r) => r.json())
      .then((r) => {
        setSurveyId(r.survey.insertedId);
        setIsOpen(true)

        // if(r.status===200) router.push(`/survey/${server==="http://localhost:3000"?'1':"635763cd7401a7f6069015d6"}`)
      });

    // let res = fetch('http://localhost:3000/api/upload', {
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
    // .then((res) => res.json())
    // .then((data) => console.log(data))
  };
  // if (typeof window !== "undefined") {
  //   document.addEventListener("click", (event) => {
  //     if (event.target.id === "portalbackground" && isOpen === true) {
  //       setIsOpen(false);
  //     }
  //   });
  // }
  return (
    <>
      <div>
        <Modal isOpen={isOpen}>
          {!surveyId ? (
            <h3>Loading</h3>
          ) : (
            <div className="h-full w-full flex flex-col bg-white">
              <div className="flex h-[10%] w-full justify-end items-start">
                <Link href={"/"}>
                  <button className="p-2 px-4 text-xl">X</button>
                </Link>
              </div>
              <h2 className="flex h-[10%] justify-center items-center text-4xl">
                Congratulations!
              </h2>
              <div className="flex h-[40%] w-full justify-center items-center text-xl text-center">
                You finished your survey, your survey can be taken and you can
                view the results at anytime. Use the button in the top right
                corner when your finished.
              </div>
              <div className="flex flex-col h-[20%] w-full justify-center items-center text-xl text-center gap-2">
                <div>Share the survey:</div>
                <Link href={`/survey/${surveyId}`}>
                  <a target="_blank">https://surveybuzz.vercel.app/survey/{surveyId}</a>
                </Link>
                <div>View Results:</div>
                <Link href={`/responses/${surveyId}`}>
                  <a target="_blank">https://surveybuzz.vercel.app/responses/{surveyId}</a>
                </Link>
              </div>
            </div>
          )}
        </Modal>
      </div>
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
          <button
            className="flex text-xl border-black border rounded-md px-2"
            onClick={() => setIsOpen(true)}
          >
            Modal
          </button>
        </div>
      </div>
    </>
  );
}
