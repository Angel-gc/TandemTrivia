import React from 'react'

const QuestionFormat = (props) =>{
    const {questionNum, question} = props;
    const currentQ = question[questionNum];
    console.log(currentQ)
  return (
      <div className="question-wrapper">
        <h3 className="question-number">Q.{questionNum+1} / 21</h3>
        <div className= "question_content">
          <h5 className="current-question">
            {currentQ.question}
          </h5>
        </div>
        <div className = "answer-list">
          {currentQ.answerList.map((ans, i)=>(
            <div key={i}> 
            <button className="answer-button"
                    id={i}
                    style={{background: +currentQ.selectedAnswerID === i ? currentQ.color : "white"}}
                    onClick={props.checkAnswer}
            >{ans}</button> 
            </div>
          ))}
        </div>
        <div className="nav-wrapper">
          <button onClick={props.revertQuestion}>
            <div className="prev"/> Prev
          </button>

          <button onClick={props.nextQuestion}>
          <div className="next"/> Next
          </button>
        </div>
    </div>
      
    )
}

export default QuestionFormat;

