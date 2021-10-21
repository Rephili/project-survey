import React from "react";

const FifthQuestion = ({
  questionInput,
  onQuestionInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <h2>Submit a question you would like me to answer next lesson.</h2>
      <label htmlFor="questionInput"></label>
      <input
        id="questionInput"
        type="text"
        value={questionInput}
        onChange={onQuestionInputChange}
      />
      <button disabled={questionInput === ""} onClick={onStepChange}>
        Submit exit ticket
      </button>
    </form>
  );
};

export default FifthQuestion;
