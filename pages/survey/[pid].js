import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import surveyData from "../../data";
import Boolean from "../../components/Questions/Boolean";

export default function Survey() {
  const router = useRouter();
  const { pid } = router.query;
  // get survey data
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const surveys = surveyData;
    const survey = surveys.find((survey) => survey._id === parseInt(pid));
    setData(survey);
    setLoading(false);

    // setLoading(true)
    // fetch('/api/profile-data')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data)
    //     setLoading(false)
  }, [pid]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <>
      <div className="flex flex-col h-full w-full text-xl items-center px-2 bg-[#f1f5f9]">
        <h3 className="bg-white text-3xl mb-6 text-center p-2 mt-2 bg-inherit">
          {data.name}
        </h3>

        <form
          className="flex flex-col h-fit w-full items-center gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          {data.questions.map((obj, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 w-full bg-white justify-center items-center border border-black p-2">
                <div id={index} className="flex text-center">
                  {obj.question}
                </div>
                <Boolean/>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
}
