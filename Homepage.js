import React from 'react'
import { Link } from 'react-router-dom'
import image from './dist/undraw_adventure.svg'
import styled from 'styled-components'

const HomeContainer = styled.section`
  height: 583px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  background: #fff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  padding-right: 20px;
  margin-top: 30px;
  @media (min-width: 1000px) {
      margin-top: 43px;
      padding-right: 127px;
    }
  }
`
const SubContainer = styled.div`
  margin-left: 23px;
  padding-bottom: 26px;
`

const ButtonCity = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
  padding-right: 158px;
  height: 60px;
  border: 1px solid #6066d0;
  border-radius: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 19px;
  margin-bottom: 23px;
  color: #6066d0;
`

const ImageHeader = styled.img`
    width: 44%;
    position: absolute;
    top: 32px;
    right: -135px;

}
    @media(min-width: 1000px) {
      width: 50%;
      position: absolute;
      top: 30px;
      left: 284px;
    }
}
`

const ButtonNext = styled.button`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700px;
  padding-left: 35px;
  padding-top: 17px;
  padding-bottom: 40px;
  padding-right: 35px;
  height: 50px;
  background: #f9a826;
  box-shadow: 0px 2px 4px rgb(252 168 47 / 40%);
  border-radius: 12px;
  border: none;
  color: #ffff;
  position: absolute;
  bottom: 2%;
  right: 6%;
  @media (min-width: 1000px) {
    bottom: 3%;
    right: 10%;
  }
`

const FlagImage = styled.img`
  padding-top: 0;
  width: 23%;
  @media (min-width: 1000px) {
    padding-top: 30px;
    width: 23%;
  }
`

const SubHeader = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
  padding-right: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 12px;
  padding-bottom: 20px;

  }
`

export default function Homepage({
  randomCountry,
  ques,
  randomOptions,
  getAnswer,
  isOpen,
  getRandomCountry,
  isDisable,
  setNext,
  next,
}) {
  return (
    <HomeContainer>
      <div className='header'>
        <h1>Country quiz</h1>
        <ImageHeader src={image} />
      </div>
      {randomCountry && (
        <SubContainer>
          {ques % 2 === 0 ? (
            <div className='question'>
              <FlagImage src={randomCountry.flag} />
              <SubHeader>What country does this flag belong to?</SubHeader>
            </div>
          ) : (
            <SubHeader>{randomCountry.capital} is the capital of?</SubHeader>
          )}
          <form>
            {randomOptions &&
              randomOptions
                .sort((a, b) => a.name.length - b.name.length)
                .map((option) => {
                  return (
                    <ButtonCity
                      className='clicked'
                      key={option?.name}
                      value={option?.name}
                      id={option?.name}
                      onClick={getAnswer}
                      disabled={isDisable}>
                      <span></span>
                      {option?.name}
                    </ButtonCity>
                  )
                })}
          </form>
          <div>
            {isOpen ? (
              <ButtonNext
                style={{ display: next ? 'block' : 'none' }}
                type='button'
                onClick={getRandomCountry}>
                Next
              </ButtonNext>
            ) : (
              <Link to='/result'>
                <ButtonNext style={{ display: next ? 'block' : 'none' }}>
                  Next
                </ButtonNext>
              </Link>
            )}
          </div>
        </SubContainer>
      )}
    </HomeContainer>
  )
}
