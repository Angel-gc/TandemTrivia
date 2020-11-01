import React from 'react'
import {Link} from 'react-router-dom';

const LandingPage = () => {
        return(
            <div className="landing-page">
                <div className="trivia-wrapper"><img alt="background-img1" src="/triviaNight.jpeg" className="trivia-Night"/></div>
                <div className="Spinner-wheel-wrapper">
                    <img alt="game-wheel" src = "/UIHere.png" className="spinner"/> 
                        <div className="instruction-container">
                            <h6 className="instructions">
                                Hi, Welcome to trivia 
                                night where we let you answer some 
                                deep questions about topics from all areas of life. 
                                Each quesion is worth 10 points. But carefull!! Wrong
                                answers are minus 5 points. Happy guessing!
                            </h6>
                            <Link className="lets_play" to='/trivia'> Lets Play! </Link>
                        </div>
                </div>
            </div>
        )
    }

export default LandingPage;