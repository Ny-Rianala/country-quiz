import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import Results from './Results'

//Functions that handle states
function Options() {
  const [countries, setCountries] = useState([])
  const [randomCountry, setRandomCountry] = useState({})
  const [randomOptions, setRandomOptions] = useState([])
  const [ques, setQues] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const [score, setScore] = useState(0)
  const [next, setNext] = useState(false)

  const url = 'https://restcountries.eu/rest/v2/all'

  // Fetch data from api
  const listOfCountry = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setCountries(data)
    setRandomCountry(data)
  }

  useEffect(() => {
    listOfCountry()
  }, [])

  function getRandomCountry() {
    const firstRandomOption =
      countries[Math.floor(Math.random() * countries.length + 1)]
    const secondRandomOption =
      countries[Math.floor(Math.random() * countries.length)]
    const thirdRandomOption =
      countries[Math.floor(Math.random() * countries.length + 1)]
    const fourthRandomOption =
      countries[Math.floor(Math.random() * countries.length + 1)]

    const randomOptions = [
      firstRandomOption,
      secondRandomOption,
      thirdRandomOption,
      fourthRandomOption,
    ]
    setRandomOptions(randomOptions)
    setRandomCountry(secondRandomOption)
    setIsDisable(false)
    setNext(false)
  }

  useEffect(() => {
    getRandomCountry()
  }, [countries])

  //Function for the answer

  function getAnswer(e) {
    e.preventDefault()
    const getCorrectAnswer = randomCountry.name
    console.log(getCorrectAnswer)
    const handleChoice = e.target.value
    const correctAnswer = document.getElementById(getCorrectAnswer)
    correctAnswer.classList.add('correctAnswer')
    setIsDisable(true)
    setNext(true)
    if (handleChoice === getCorrectAnswer) {
      e.target.classList.add('correctAnswer')
      setScore(score + 1)
      setIsOpen(true)
      setCountries(countries)
    } else {
      e.target.classList.add('wrongAnswer')
      setIsOpen(false)
    }

    setTimeout(() => {
      setQues(ques + 1)
    }, 30000)
  }

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Homepage
            randomCountry={randomCountry}
            ques={ques}
            randomOptions={randomOptions}
            getAnswer={getAnswer}
            isOpen={isOpen}
            getRandomCountry={getRandomCountry}
            isDisable={isDisable}
            setNext={setNext}
            next={next}
          />
        </Route>
        <Route path='/result'>
          <Results
            setScore={setScore}
            setIsDisable={setIsDisable}
            setNext={setNext}
            score={score}
            getRandomCountry={getRandomCountry}
          />
        </Route>
      </Switch>
    </>
  )
}
export default Options
