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
        font-family: Poppins;
        font-size: 15px;
        color: #1D355D;
        padding-bottom: 71px;
        margin-bottom: 0;
        margin-top: 0;
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
    font-weight: 700;
    font-size: 14px;
    font-family: Poppins;
`;



function Results({
    score,
    getRandomCountry
}) {
    
    console.log(score);

    return (
        <ContainerResult>
            <ImageWinner src="./undraw_winners.svg"/>
            <h3 className="result">Results</h3>
            <p>You got <span>{score}</span> correct answers</p>
            <Link to="/">
                <ButtonTry
                    onClick={getRandomCountry}
                >Try again</ButtonTry>
            </Link>
        </ContainerResult>
    )
}

export default Results
