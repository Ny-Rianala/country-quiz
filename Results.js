import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";


const ContainerResult = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 24px;
    display: flex;
    margin-bottom: 23px;
    padding-bottom: 33px;
    padding-left: 85px;
    padding-top: 49px;
    padding-right: 85px;
    color: black;
    p {
        padding-bottom: 71px;
    }
`; 

const ImageWinner = styled.img`
    width: 100%;
    padding-bottom: 72px;
`;

const ButtonTry = styled.button`
    color: #1D355D;
    font-size: 18px;
    border: 2px solid #1D355D;
    padding-top: 18px;
    padding-left: 61px;
    padding-bottom: 17px;
    padding-right: 61px;
    border-radius: 12px;
    font-weight: 600px;
    span {
        color: green;
    }
`;



function Results({
    correctAnswer,
    getRandomCountry
}) {
    
    console.log(correctAnswer);

    return (
        <ContainerResult>
            <ImageWinner src="./undraw_winners.svg"/>
            <h3>Results</h3>
            <p>You got <span>{correctAnswer}</span> correct answers</p>
            <Link to="/">
                <ButtonTry
                    onClick={getRandomCountry}
                >Try Again</ButtonTry>
            </Link>
        </ContainerResult>
    )
}

export default Results
