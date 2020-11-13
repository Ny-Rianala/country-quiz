import React, {useState, useEffect} from "react"


//Functions that handle states
function Options() {
    const [countries, setCountries] = useState([]);
    const [ques, setQues] = useState(0)
    const [isOpen, setIsOpen] = useState(false)


    const url = "https://restcountries.eu/rest/v2/all";

// Fetch data from api
        const ListOfCountry = async () => {
            const res = await fetch(url);
            const data = await res.json();
            const n = 4;
            console.log(data.sort(() => 0.5 - Math.random()).slice(0, n));
            setCountries(data.sort(() => 0.5 - Math.random()).slice(0, n));
            
        }

        useEffect(() => {
            ListOfCountry(); 
        }, [0])
    


// Array of an object for the questions
        const questions = [
            {
                nameOfCapital : "is Capital of"
            },
            {
                nameOfCountry : "Which country this flag belong to?"
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
       setIsOpen(!isOpen)
       console.log(isOpen);
        }
        

        //if the next button is clicked  , we should have random


    return (  
        <div>
             
            {countries.map((country, index) => {     
        return (
               <div key={index}> 
               <div>
                  {(questions[0] && <p>{country.capital} {questions[ques].nameOfCapital}</p>)} 
                  {(questions[1] && <img src={country.flag}/> )}{questions[ques].nameOfCountry}
                </div>
                  <div>
                    <button className="buttonOption" onClick={handleClick} >{country.name}</button>
                    {isOpen && <button onClick={randomQuestions}>Next</button>} 
                  </div>
               </div>
        )}
            )}</div>
    )
        
                }
export default Options;

