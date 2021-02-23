import React from 'react'
import { Link } from "react-router-dom";

function Results({
    correctAnswer,
    getRandomCountry
}) {
    
    console.log(correctAnswer);

    return (
        <div className="containerTry">
            <h1>Results</h1>
            <p>You got <span>{correctAnswer}</span> correct answers</p>
            <Link to="/">
                <button
                    onClick={getRandomCountry}
                >Try Again</button>
            </Link>
        </div>
    )
}

export default Results
