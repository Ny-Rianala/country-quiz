import React, {useState, useEffect} from "react"



function Options() {
    const [countries, setCountries] = useState([]);
    const [ques, setQues] = useState(0)


    const url = "https://restcountries.eu/rest/v2/all";
        const ListOfCountry = async () => {
            const res = await fetch(url);
            const data = await res.json();
            const n = 4;
            console.log(data.sort(() => 0.5 - Math.random()).slice(0, n));
            setCountries(data.sort(() => 0.5 - Math.random()).slice(0, n));
            
        }

        useEffect(() => {
            ListOfCountry(); 
        }, [])
    
        function handleClick(e) {
            e.preventDefault();
            console.log("I was clicked");
        }



        const questions = [
            {
                nameOfCapital : "is Capital of"
            },
            {
                nameOfCapital : "Which country this flag belong to"
            }
    
        ]
    
    
    
    // console.log(ques);
    const randomQuestions = e => {
        const len = questions.length;
        console.log(len);
        setQues(Math.floor(Math.random() * len));
    };
    



    return (  
        <div>  
            <button onClick={randomQuestions}>Next</button>
            {countries.map((country, index) => {    
        return (
               <div key={index}> 
               <div>
                  {(questions[0] && <p>{country.capital} {questions[ques].nameOfCapital}</p>)}
                  {(questions[1] && <img src={country.flag} />)}
                </div>
                <div>
                    <button className="buttonOption" onClick={handleClick}>{country.name}</button> 
                  </div>
               </div>
            )}
            )}</div>
    )
        }

export default Options;

