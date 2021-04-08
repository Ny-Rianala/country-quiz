import React from 'react';
import { Link } from 'react-router-dom';
// import image from './dist/undraw_adventure_4hum 1.50449585.svg';
import styled from "styled-components"


const HomeContainer = styled.section`
    padding-top: 41px;
    padding-left: 32px;
    padding-bottom: 60px;
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
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    width: 320px;
    height: 50px;
    border: 1px solid #6066D0;
    border-radius: 12px;
    margin-bottom: 25px;
    color: #6066D0;
    /* :hover {
      background-color: #F9A826;
      color: white;
      cursor: pointer;
      border: none;
    } */
`;



const ImageHeader = styled.img`
    top: 0%;
    width: 25%;
    position: absolute;
    left: 65%
`;

const ButtonNext = styled.button`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700px;
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
    left: 62%;
    top: 82%;
    margin-bottom: 32px;
    margin-top: 24px;
    color: #ffff;
`;

const FlagImage = styled.img`
    padding-top: 0;
`;


const SubHeader = styled.h2`
    font-family: Poppins;
    font-weight: 700px;
    color: #2F527B;
    font-size: 24px;
    line-height: 36px;
    padding-left: 23px;
    padding-right: 10px;
    margin-top: 0px;
    margin-bottom: 0;
    padding-top: 28px;
    padding-bottom: 32px;
`;

export default function Homepage({
  randomCountry,
  ques,
  randomOptions,
  getAnswer,
  isOpen,
  getRandomCountry,
  isDisable,
  setNext,
  next

}
) {

  return (
    <HomeContainer>
      <ImageHeader src="./undraw_adventure_4hum 1.svg" />
      {randomCountry &&
        <div>
          {ques % 2 === 0 ?
            <div>
              <FlagImage src={randomCountry.flag} />
              <SubHeader>What country does this flag belong to?</SubHeader>
            </div>
            : <h2>{randomCountry.capital} is the capital of?</h2>}
          <form>
            {randomOptions && randomOptions.sort((a, b) => a.name.length - b.name.length).map((option) => {
              return (
                /* <ButtonOption>   */
                <ButtonCity
                  className="clicked"
                  key={option?.name}
                  value={option?.name}
                  id={option?.name}
                  onClick={getAnswer}

                  disabled={isDisable}
                ><span></span>{option?.name}
                </ButtonCity>
                /* </ButtonOption> */
              )
            })}
          </form>
          <div>
            {isOpen ?
              <ButtonNext style={{display: next ? "block" : "none" }}
                type="button"
                onClick={getRandomCountry}
              >
                Next
              </ButtonNext>
              :
              <Link to="/result">
                <ButtonNext style={{display: next ? "block" : "none" }}>Next</ButtonNext>
              </Link>
            }
          </div>
        </div>
      }
    </HomeContainer>
  )
}
