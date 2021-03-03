import React from 'react';
import { Link } from 'react-router-dom';
// import image from './dist/undraw_adventure_4hum 1.50449585.svg';
import styled from "styled-components"


const HomeContainer = styled.section`
    /* background: #fff;
    border-radius: 24px;
    margin-left: 25px;
    padding-bottom: 75px; 
    margin-bottom: 89px;
    width: 90%;
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    align-items: center; */
    width: 464px;
    height: 515px;
    background: #fff;
    border-radius: 24px;
    display: flex;
    justify-content: center;
`;

const ButtonOption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ButtonCity = styled.button`
    /* width: 315px;
    height: 65px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 0;
    border: none;
    border-radius: 12px;
    color: #6066D0;
    cursor: pointer;
    text-align: center; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
`;

const ImageHeader = styled.img`
    top: 0%;
    width: 25%;
    position: absolute;
    left: 65%
`;

const ButtonNext = styled.button`
    padding-left: 37px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 37px;
    width: 100px;
    height: 50px;
    background: #F9A826;
    box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
    border-radius: 12px;
    border: none;
    position: absolute;
    left: 60%;
    top: 87%;
    color: #ffff;
`;


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
    <HomeContainer>
      <ImageHeader src="./undraw_adventure_4hum 1.svg" />
      {randomCountry &&
        <div>
          {ques % 2 === 0 ?
            <div>
              <img src={randomCountry.flag} />
              <h2>What country does this flag belong to?</h2>
            </div>
            : <h2>{randomCountry.capital} is the capital of?</h2>}
          <form>
            {randomOptions && randomOptions.map((option) => {
              return (
                <ButtonOption>
                  <ButtonCity
                    key={option?.name}
                    value={option?.name}
                    id={option?.name}
                    onClick={getAnswer}
                    >{option?.name}
                  </ButtonCity>
                </ButtonOption>
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
                <ButtonNext>Next</ButtonNext>
              </Link>
            }
          </div>
        </div>
      }
    </HomeContainer>
  )
}
