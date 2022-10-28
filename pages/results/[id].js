import connectToDatabase from "../../utils/mongodb";
import { ObjectId } from "mongodb";
import { useState } from "react";

export default function Results({ survey }) {
  const [results, setResults] = useState(null)
  return (
    <>
      <div className="flex flex-col h-full w-full text-xl items-center px-2 bg-[#f1f5f9]">
        <h3
          className="bg-white text-3xl mb-6 text-center p-2 mt-2 bg-inherit"
        >
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
                className="flex flex-col gap-2 w-full bg-white justify-center items-center border border-black p-2"
              >
                <div id={index} className="flex text-center">
                  {obj.question}
                </div>
                {obj.input === "boolean" ? (
                  <div>boool</div>
                  // <Boolean updateAnswer={updateAnswer} questionIndex={index} />
                  ) : null}
                {obj.input === "numeric" ? (
                  <div>boool</div>
                  // <Numeric updateAnswer={updateAnswer} questionIndex={index} />
                ) : null}
              </div>
            );
          })}

          <button className="border border-black px-2 mt-10 bg-slate-300 rounded-[200px]">Submit</button>
        </form>
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
// get survey for name then get results
    return {
      props: { survey: JSON.parse(JSON.stringify(survey[0])) },
    };
  }



export const getStaticPaths = async () => {

    const { db } = await connectToDatabase();
    const surveys = await db
      .collection("Surveys")
      .find({})
      .toArray();

    const paths = surveys.map((survey) => {
      return {
        params: { id: survey._id.toString() },
      };
    });
    return {
      paths,
      fallback: 'blocking',
    };
  }
