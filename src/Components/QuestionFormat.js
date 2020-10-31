import React from 'react'

const QuestionFormat = (props) =>{
    const {questionNum, question, playerScore} = props;
    const currentQ = question[questionNum];
    console.log(currentQ)
  return (
      <div>
        <h1>Score: {playerScore}</h1>
        <h3>Q.{questionNum+1} </h3>
        <div className= "question_content">
          <h5>
            {currentQ.question}
          </h5>
        </div>
        <div className = "answer_list">
          {currentQ.answerList.map((ans, i)=>(
            <div key={i}> 
            <button className="answer_button"
                    id={i}
                    style={{background: +currentQ.selectedAnswerID === i ? currentQ.color : "aqua"}}
                    onClick={props.checkAnswer}
            >{ans}</button> 
            </div>
          ))}
        </div>
        <div>
          <button onClick={props.revertQuestion}>
            Previous Question
          </button>
        </div>
        <div>
        <button onClick={props.nextQuestion}>
            Next Question
          </button>
        </div>
    </div>
      
    )
}

export default QuestionFormat;

