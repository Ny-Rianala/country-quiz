import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from './dist/undraw_winners.svg'

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
  padding-top: 40px;
  padding-right: 85px;
  color: black;
  p {
    font-family: Poppins;
    font-size: 13px;
    color: #1d355d;
    padding-bottom: 30px;
    margin-bottom: 0;
    margin-top: 0;
  }
  @media (min-width: 1000px) {
    p {
      font-family: Poppins;
      font-size: 18px;
      color: #1d355d;
      padding-bottom: 71px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`

const ImageWinner = styled.img`
  width: 100%;
  //   padding-bottom: 72px;
`

const ButtonTry = styled.button`
  color: #1d355d;
  font-size: 18px;
  border: 2px solid #1d355d;
  padding-top: 18px;
  padding-left: 40px;
  padding-bottom: 17px;
  padding-right: 40px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  font-family: Poppins;
  height: 57px;
  width: -25px;
  @media (min-width: 1000px) {
    color: #1d355d;
    font-size: 18px;
    border: 2px solid #1d355d;
    padding-top: 18px;
    padding-left: 61px;
    padding-bottom: 17px;
    padding-right: 61px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 14px;
    font-family: Poppins;
  }
`

function Results({ score, setNext, setScore, setIsDisable, getRandomCountry }) {
  console.log(score)
  function resetResult() {
    setScore(0)
    setIsDisable(false)
    setNext(false)
  }
  return (
    <ContainerResult>
      <ImageWinner src={image} />
      <h3 className='result'>Results</h3>
      <p>
        You got <span>{score}</span> correct answers
      </p>
      <Link to='/'>
        <ButtonTry onClick={resetResult}>Try again</ButtonTry>
      </Link>
    </ContainerResult>
  )
}

export default Results
