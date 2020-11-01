import React, { Component } from 'react'
import gameQuestions from '../Apprentice_Tandem.json'
import QuestionFormat from './QuestionFormat'
import GameWinScreen from './GameWinScreen'
import GameLoseScreen from './GameLoseScreen'

export default class GameScreen extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            gameReset: false,
            question: [{
                answerList:[], 
                correct:'', 
                incorrect: [], 
                question:'', 
                isAnswered: false
            }],
            questionNum: 0,
            playerScore: 0,
            playerWon: false,
            gameOver: false,
            passingScore: 130
        }
    }
 
     componentDidMount(){
        const {questionNum} = this.state
        const json = gameQuestions;
        const currentQ = json[questionNum];
        currentQ.isAnswered = false;
        let answerList = currentQ.incorrect.slice();
        const randomInt = Math.floor(Math.random() * 4) + 1;
        answerList.splice(randomInt, 0, currentQ.correct);
        currentQ.answerList = answerList;
        this.setState({ data: json, question: [currentQ]})    
    }
    

    loadNewQuestion = (id) => {
        const { questionNum, data, question } = this.state;
        const value = questionNum + 1
        const nextQ = data[value]
        nextQ.isAnswered = false;
        let answerList = nextQ.incorrect.slice();
        const randomInt = Math.floor(Math.random() * 4) + 1;
        answerList.splice(randomInt, 0, nextQ.correct)
        nextQ.answerList = answerList
        
        this.setState({
            questionNum: value, 
            question: [...question, nextQ]
            
        })
    }
    
    checkAnswer = (e) => {
        const {questionNum, question} = this.state;
        const {isAnswered} = question[questionNum]
        if (!isAnswered){
            this.answerQuestion(e)
        }
    }

    revertQuestion = () => {
        const {questionNum} = this.state
        if (questionNum){
            this.setState({
                questionNum: questionNum-1
            })  
        }
    }

    nextQuestion = () => {
        const {questionNum, question} = this.state
        if (questionNum < question.length-1){
            this.setState({
                questionNum: questionNum+1
            })  
        }
    }

    answerQuestion = (e) => {
        const {playerScore, question} = this.state;
        const [storedQ] = question.slice(question.length-1);
        const prevQ = question.slice(0, question.length-1);
        
        storedQ.isAnswered = true;

        if (e.target.innerHTML === storedQ.correct) {
            e.target.style.background = 'green'
            storedQ.color = 'green'
            storedQ.selectedAnswerID = e.target.id
            this.setState({
                playerScore: playerScore + 10,
                question: [...prevQ, storedQ]
            })
        } else {
            e.target.style.background = 'red'
            storedQ.color = 'red'
            storedQ.selectedAnswerID = e.target.id
            this.setState({
                question: [...prevQ, storedQ],
                playerScore: playerScore - 5,
            })
        }
        setTimeout(()=> e.target.style.background = "aqua", 1000)
        
        this.checkGameStage()
    }

    checkGameStage = () => {
        const {questionNum, data, playerScore, passingScore} = this.state
        if (questionNum < data.length - 1) {
            setTimeout(() => this.loadNewQuestion(), 1000)
        } else {
            if (playerScore >= passingScore){
                this.setState({
                    gameOver: true,
                    playerWon: true
                })
            } else {
                this.setState({
                    gameOver: true,
                })
            }
        }
    }


    render() {
        const { playerScore, questionNum, question, gameOver, playerWon} = this.state;
        return (
            <div>
                <h1>Score: {playerScore}</h1>
                <div className="question-container"> { !gameOver && <QuestionFormat 
                                    question={question}
                                    questionNum={questionNum}
                                    playerScore={playerScore}
                                    checkAnswer={this.checkAnswer}
                                    revertQuestion={this.revertQuestion} 
                                    nextQuestion={this.nextQuestion}
                                    />} 
                </div>
                <div>
                    {gameOver && (playerWon ? <GameWinScreen playerScore={playerScore}/> : <GameLoseScreen playerScore={playerScore}/>)}
                </div>

            </div>
        )
    }
}
