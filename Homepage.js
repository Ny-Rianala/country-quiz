import React from 'react';
import { Link } from 'react-router-dom';
// import image from './dist/undraw_adventure_4hum 1.50449585.svg';
import styled from "styled-components"


const HomeContainer = styled.section`
    padding-top: 65px;
    padding-left: 45px;
    padding-bottom: 42px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    margin-bottom: 286px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
`;

const ButtonOption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ButtonCity = styled.button`
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
                    className="clicked"
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
              <ButtonNext
                type="button"
                onClick={getRandomCountry}
              >
                Next
              </ButtonNext>
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
