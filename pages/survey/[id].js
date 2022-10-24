import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import surveyData from "../../data";
import Boolean from "../../components/Questions/Boolean";
import Numeric from '../../components/Questions/Numeric'
import connectToDatabase from "../../utils/mongodb";

export default function Survey({ survey }) {
  // get survey data
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // const createUserArray = () => {
  //   let newArray = []

  // };
  // const reducer = (userData, action) => {
  //   switch (action.type) {
  //     case "initialize":
  //       return (
  //         data?data.questions:null
  //         // data.questions.map((element, index) => {
  //         //   return {answer: '', index: index}
  //         // })

  //         )
  //       ;
  //     case "edit":
  //       return "";
  //     default:
  //       return userData;
  //   }
  // };

  // const [userData, dispatch] = useReducer(reducer, {asdf: 'test'});
  const updateAnswer = (id, value) => {
    console.log(id, value);
    let newArray = [...data];
    newArray[id].answer = value;
    setData(newArray);
  };
  // const updateNumeric = (id, value) => {
  //   console.log(id, value);
  //   let newArray = [...data];
  //   newArray[id].answer = value;
  //   setData(newArray);
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  useEffect(() => {
    let answers = survey.questions.map((question, index) => {
      return {
        index: index,
        answer: ''
      };
    });
    setData(answers);
    //   setLoading(true);
    //   const surveys = surveyData;
    //   function surveyArray() {
    //     return new Promise(function (resolve, reject) {
    //       const survey = surveys.find((survey) => survey._id === parseInt(pid));
    //       resolve(survey);
    //     });
    //   }
    //   surveyArray()
    //     .then((res) => setData(res))
    //     .then(setLoading(false))
    //     .then(dispatch({ type: "initialize" }));
    //   // setUserData([data.answers.forEach((element, index) => createUserArray(element, index))])
    //   // let questionsArray = []
    //   // data.answers.array.forEach(element, index => {
    //   //   questionsArray.push({index: index, answer: '' })
    //   // })
    //   // setUserData(questionsArray)

    //   // setLoading(true)
    //   // fetch('/api/profile-data')
    //   //   .then((res) => res.json())
    //   //   .then((data) => {
    //   //     setData(data)
    //   //     setLoading(false)
  }, [survey]);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No data</p>;

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
                  <Boolean updateAnswer={updateAnswer} questionIndex={index} />
                ) : null}
                {obj.input === "numeric" ? (
                  <Numeric updateAnswer={updateAnswer} questionIndex={index} />
                ) : null}
              </div>
            );
          })}
          <button className="border border-black px-2 mt-10 bg-white rounded-[200px]">Submit</button>
        </form>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const id = context.params.id;
    const surveys = surveyData;
    const survey = surveys.find((survey) => survey._id === parseInt(id));
  
    return {
      props: {
        survey: survey,
      },
    };
  } else {
    const id = context.params.id;
    const { db } = await connectToDatabase();
    const survey = await db
      .collection("Surveys")
      .find({ _id: ObjectId(id) })
      .toArray();

    return {
      props: { survey: JSON.parse(JSON.stringify(survey[0])) },
    };
  }
};


export const getStaticPaths = async () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    const surveys = surveyData;
    const paths = surveys.map((survey) => {
      return {
        params: { id: survey._id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } else {
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
      fallback: false,
    };
  }
};
