import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Results from "./Results"


//Functions that handle states
function Options() {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState({});
  const [randomOptions, setRandomOptions] = useState([]);
  const [ques, setQues] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  console.log(correctAnswer);
  // const [next, setNext] = useState(true);

  const url = "https://restcountries.eu/rest/v2/all";

  // Fetch data from api
  const listOfCountry = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCountries(data);
    setRandomCountry(data);
    console.log(data);
    //minimize the value from the whole array
    // const n = 4;
    // console.log(data.sort(() => 0.5 - Math.random()).slice(0, n));
    // setCountries(data.sort(() => 0.5 - Math.random()).slice(0, n));

  }

  useEffect(() => {
    listOfCountry();
  }, [])


  function getRandomCountry() {
    const firstRandomOption = countries[Math.floor(Math.random() * countries.length)];
    const secondRandomOption = countries[Math.floor(Math.random() * countries.length)];
    const thirdRandomOption = countries[Math.floor(Math.random() * countries.length)];
    const fourthRandomOption = countries[Math.floor(Math.random() * countries.length)];

    const randomOptions = [
      firstRandomOption,
      secondRandomOption,
      thirdRandomOption,
      fourthRandomOption
    ]
    setRandomOptions(randomOptions);
    setRandomCountry(secondRandomOption);
  }

  useEffect(() => {
    getRandomCountry();
  }, [countries])

  //Function for the answer

  function getAnswer(e) {
    e.preventDefault();
    const correctAnswer = randomCountry.name;
    console.log(correctAnswer);
    const handleChoice = e.target.value;
    console.log(handleChoice);

    // document.getElementById(correctAnswer).style.backgroundColor = "green";
    // document.getElementById(correctAnswer).style.color = "white";

    if (handleChoice === correctAnswer) {
      e.target.classList.add("correctAnswer");
      setCorrectAnswer(correctAnswer + 1);
      setIsOpen(true);
      setCountries(countries);
    } else {
      e.target.classList.add("wrongAnswer");
      setIsOpen(false);
    }

    setTimeout(() => {
      setQues(ques + 1);
    }, 30000)
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage
            randomCountry={randomCountry}
            ques={ques}
            randomOptions={randomOptions}
            getAnswer={getAnswer}
            isOpen={isOpen}
            getRandomCountry={getRandomCountry}
          />
        </Route>
        <Route path="/result">
          <Results 
              correctAnswer={correctAnswer}
              getRandomCountry={getRandomCountry}
          />
        </Route>
      </Switch>
    </>
  )

}
export default Options;

// // Array of an object for the questions
// const questions = [{
//         nameOfCapital: "is Capital of"
//     },
//     {
//         nameOfCountry: "Which country this flag belong to?"
//     }

// ]


// const randomQuestions = e => {
//     const len = questions.length;
//     console.log(len);
//     setQues(Math.floor(Math.random() * len));
// };


// //if the one of the list is clicked, this is to show the next button
// function handleClick(e) {
//     e.preventDefault();
//    setIsOpen(true);
// }

// if (!countries.length) return null

// //if thes next button is clicked  , we should have random
// console.log(countries);
// const random = Math.floor(Math.random() * 2);
// console.log(random);

// console.log(questions[1].nameOfCountry);
// console.log(countries[1].flag);
// console.log(questions[1]);

// function handleFalseAnswer(e) {
//   e.preventDefault();
//   setAnswer(true);
//   console.log(answer);
// }