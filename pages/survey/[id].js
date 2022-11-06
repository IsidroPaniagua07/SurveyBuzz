import { useEffect, useState } from "react";
import Boolean from "../../components/Questions/Boolean";
import Numeric from "../../components/Questions/Numeric";
import connectToDatabase from "../../utils/mongodb";
import { ObjectId } from "mongodb";

export default function Survey({ survey }) {
  const [data, setData] = useState(null);

  const updateAnswer = (id, value) => {
    console.log(id, value);
    let newData = { ...data };
    newData.questions[id].answer = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let server;
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? (server = "http://localhost:3000")
      : (server = "https://surveybuzz.vercel.app/");

    // setIsOpen(true);
    fetch(
      // development build code

      `${server}/api/results`,
      {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          questions: data.questions,
        }),
      }
    )
      .then((r) => r.json())
      .then((r) => console.log(r));
  };

  useEffect(() => {
    console.log(survey);
    let questions = survey.questions.map((obj, index) => {
      return {
        name: obj.question,
        index: index,
        question: obj.question,
        type: obj.input,
        answer: "",
      };
    });
    setData({ name: survey.name, questions });
    console.log({ name: survey.name, questions });
  }, [survey]);

  return (
    <>
      <div className="flex flex-col h-full w-full text-xl items-center px-2 bg-[#f1f5f9]">
        <h3 className="bg-white text-3xl mb-6 text-center p-2 mt-2 bg-inherit">
          {survey.name}
        </h3>

        <form
          className="flex flex-col h-fit w-full items-center gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          {survey.questions.map((obj, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 w-[70%] bg-white justify-center items-center border border-black p-2"
              >
                <div id={index} className="flex text-center">
                  {obj.question}
                </div>
                {obj.input === "boolean" ? (
                  <Boolean updateAnswer={updateAnswer} questionIndex={index} />
                ) : null}
                {obj.input === "numeric" ? (
                  <Numeric updateAnswer={updateAnswer} questionIndex={index} />
                ) : null}
              </div>
            );
          })}

          <button
            type="submit"
            className="border border-black px-2 mt-10 bg-slate-300 rounded-[200px]"
          >
            Submit
          </button>
        </form>
        <button className="underline mt-6 rounded-[200px]">
          View Responses
        </button>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { db } = await connectToDatabase();
  const survey = await db
    .collection("Surveys")
    .find({ _id: ObjectId(id) })
    .toArray();

  return {
    props: { survey: JSON.parse(JSON.stringify(survey[0])) },
  };
};

export const getStaticPaths = async () => {
  const { db } = await connectToDatabase();
  const surveys = await db.collection("Surveys").find({}).toArray();
  const paths = surveys.map((survey) => {
    return {
      params: { id: survey._id.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
