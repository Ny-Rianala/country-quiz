import React, { useState, useEffect } from "react"


//Functions that handle states
function Options() {
    const [countries, setCountries] = useState([]);
    const [ques, setQues] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [next, setNext] = useState(true);
    const [answer, setAnswer] = useState(false);

    const url = "https://restcountries.eu/rest/v2/all";

    // Fetch data from api
    const ListOfCountry = async() => {
        const res = await fetch(url);
        const data = await res.json();
        //minimize the value from the whole array
        const n = 4;
        // console.log(data.sort(() => 0.5 - Math.random()).slice(0, n));
        setCountries(data.sort(() => 0.5 - Math.random()).slice(0, n));

    }

    useEffect(() => {
        ListOfCountry();
    }, [])


    // Array of an object for the questions
    const questions = [{
            nameOfCapital: "is Capital of"
        },
        {
            nameOfCountry: "Which country this flag belong to?"
        }

    ]


    const randomQuestions = e => {
        const len = questions.length;
        console.log(len);
        setQues(Math.floor(Math.random() * len));
    };


    //if the one of the list is clicked, this is to show the next button
    function handleClick(e) {
        e.preventDefault();
       setIsOpen(true);
    }

    if (!countries.length) return null

    //if thes next button is clicked  , we should have random
    console.log(countries);
    const random = Math.floor(Math.random() * 2);
    console.log(random);

    console.log(questions[1].nameOfCountry);
    console.log(countries[1].flag);
    console.log(questions[1]);

    function handleFalseAnswer(e) {
      e.preventDefault();
      setAnswer(true);
      console.log(answer);
    }

  return (
    <div  className="quiz-card">
      <div className="containerCard">
        <div className="questionCard">
        {random === 0
            ? (questions[0] && <h2> {countries[0].capital} {questions[0].nameOfCapital} </h2>)
            : (<div className="question"><img src={countries[1].flag} /><h2>{questions[1].nameOfCountry} </h2></div>)
        }
        </div>
        {countries.map((country, index) => (
          <div key={index}>
            <div>
              <button className="buttonOption"
                onClick={handleClick} >{country.name}
              </button> 
            </div>
          </div>
        ))}
              {
                isOpen  &&
              <button className="next" onClick={handleFalseAnswer}>
                  Next
              </button>}
        </div>

      </div>
  )
}
            
    export default Options;