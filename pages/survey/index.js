import { useState, useRef } from "react";
import Modal from "../../components/Modal/Modal";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Create() {
  const emailRef = useRef("");
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
    setIsOpen(true);
    fetch(
      // development build code

      `${server}/api/create`,
      {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          questions: data.questions,
        }),
      }
    )
      .then((r) => r.json())
      .then((r) => {
        setSurveyId(r.survey.insertedId);
      });
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        { to_email: emailRef.current.value.toString(), survey_id: surveyId },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC
      )
      .then(
        (result) => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...");
        }
      );
  };

  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <Modal isOpen={isOpen}>
          {!surveyId ? (
            <div className="flex w-full justify-center">
              <h3 className="flex h-[20%] text-4xl justify-center items-center">
                Loading...
              </h3>
            </div>
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
              <div className="flex h-[40%] w-[90%] justify-center items-center text-xl text-center">
                You finished creating your survey, it can be taken and you can
                view the results at anytime. Use the button in the top right
                corner to go back to the homepage.
              </div>
              <div className="flex flex-col h-[20%] w-full justify-center items-center text-xl text-center gap-2">
                <div>Share the survey:</div>
                <Link href={`/survey/${surveyId}`}>
                  <a target="_blank">
                    https://surveybuzz.vercel.app/survey/{surveyId}
                  </a>
                </Link>
                <div>View Results:</div>
                <Link href={`/results/${surveyId}`}>
                  <a target="_blank">
                    https://surveybuzz.vercel.app/results/{surveyId}
                  </a>
                </Link>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <div className="text-lg">Email survey links</div>
                <input
                  ref={emailRef}
                  className="border border-black"
                  required
                  placeholder="Email"
                />
                <button
                  className="bg-black text-white
       px-2"
                  onClick={(e) => sendEmail(e)}
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </Modal>

        <div className="flex flex-col h-full w-full text-xl items-center px-2 bg-[#f1f5f9]">
          {/* <input
            className="bg-white text-3xl mb-6 text-center p-2 mt-2 border border-slate-400 bg-inherit"
            placeholder="Name your survey"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          /> */}
          <div className="text-3xl mb-16 text-center p-2 mt-2 border border-slate-400" suppressContentEditableWarning contentEditable>
            Name your survey
          </div>
          <form
            className="flex flex-col h-fit w-[70%] items-center gap-8"
            onSubmit={(e) => handleSubmit(e)}
          >
            {data.questions.map((obj, index) => {
              return (
                <div key={index} className="flex flex-col w-full gap-4 items-center justify-between">
                  <textarea
                  
                    id={index}
                    rows={3}
   
                    placeholder={
                      index === 0 ? "Type your question here..." : null
                    }
                    className="border border-black w-[50%]"
                    value={obj.question}
                    onChange={(e) => editQuestionName(e)}
                  />
                  <div className="flex gap-4">

                  <select
                    defaultValue={obj.input}
                    id={index}
                    className="border border-black h-fit"
                    onChange={(e) => editQuestioninput(e)}
                  >
                    <option value="boolean">True or False</option>
                    <option value="numeric">Numeric</option>
                  </select>
                  <button
                  className="rounded-md px-4 text-white bg-red-700"
                    id={index}
                    type='button'
                    onClick={(e) => deleteQuestion(e.target.id)}
                  >
                    Delete
                  </button>
                    </div>
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
        {/* )
        } */}
      </div>
    </>
  );
}
