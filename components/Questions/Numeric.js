import { checkIsManualRevalidate } from "next/dist/server/api-utils";

const Numeric= ({ data, updateAnswer, questionIndex }) => {

    const handleOnClick = (e) => {
        const { value } = e.target
        document.querySelectorAll(`input:checked[id$="${questionIndex}"]`).forEach((element)=> element.checked = false)
        document.querySelector(`[id$="${value}-${questionIndex}"]`).checked = true
        updateAnswer(questionIndex, value)
      }
      return (
        <>
        <div className="flex flex-row gap-14">

        <div className="flex flex-row gap-2">
        <input type="radio" id={`1-${questionIndex}`} value="1" onClick={e => handleOnClick(e)}/>
        <label>1</label>
        </div>
        <div className="flex flex-row gap-2">
        <input type="radio" id={`2-${questionIndex}`} value="2" onClick={e => handleOnClick(e)}/>
        <label>2</label>
        </div>
        <div className="flex flex-row gap-2">
        <input type="radio" id={`3-${questionIndex}`} value="3" onClick={e => handleOnClick(e)}/>
        <label>3</label>
        </div>
        <div className="flex flex-row gap-2">
        <input type="radio" id={`4-${questionIndex}`} value="4" onClick={e => handleOnClick(e)}/>
        <label>4</label>
        </div>
        <div className="flex flex-row gap-2">
        <input type="radio" id={`5-${questionIndex}`} value="5" onClick={e => handleOnClick(e)}/>
        <label>5</label>
        </div>
        </div>
        </>
      );
    };
    
  export default Numeric;
  