import React from 'react';
import { Link } from 'react-router-dom';
// import image from './dist/undraw_adventure_4hum 1.50449585.svg'


export default function Homepage({
    randomCountry,
    ques,
    randomOptions,
    getAnswer,
    isOpen,
    getRandomCountry
}
) {

    return (
        <>
            <img src="./undraw_adventure_4hum 1.svg" />
            {randomCountry && 
            <div>
                {ques % 2 === 0 ? 
                    <div>
                        <img src={randomCountry.flag} />
                    </div> 
                    : 
                    <h2>What country does this flag belong to?</h2>
                }
                    : 
            </div>}
                    <h2>{randomCountry.capital} is the capital of?</h2>
            <form>
                {randomOptions && randomOptions.map((option) => {
                    return (
                        <button
                            key={option?.name}
                            value={option?.name}
                            id={option?.name}
                            onClick={getAnswer}
                        >{option?.name}</button>
                    )
                })}
            </form>
            <div>
                {isOpen ?
                    <button
                        type="button"
                        onClick={getRandomCountry}
                    >
                        Next
                    </button> 
                    : 
                    <Link to="/result">
                        <button>Next</button>
                    </Link>
                }
            </div>
        </>
    )

}
