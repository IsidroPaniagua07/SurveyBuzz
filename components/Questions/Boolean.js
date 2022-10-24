const Boolean = ({ data, updateAnswer, questionIndex }) => {

  const handleOnClick = (e) => {
    const { value } = e.target
    if (value === 'disagree') {
      document.getElementById(`agree-${questionIndex}`).checked = false    
      updateAnswer(questionIndex, value)
      return
    }
    document.getElementById(`disagree-${questionIndex}`).checked = false
    updateAnswer(questionIndex, value)
  }
  return (
    <>
    <div className="flex flex-row gap-4">
    <input type="radio" id={`agree-${questionIndex}`} value="agree" onClick={e => handleOnClick(e)}/>
    <label>Agree</label>
    <input type="radio" id={`disagree-${questionIndex}`} value="disagree" onClick={e => handleOnClick(e)}/>
    <label>Disagree</label>
    </div>
    </>
  );
};

export default Boolean;
