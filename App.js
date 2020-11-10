import React, { useEffect, useState } from "react"


function App() {
    const [countries, setCountries] = useState([]);

    const url = "https://restcountries.eu/rest/v2/";
        const ListOfCountry = async () => {
            const res = await fetch(url);
            const data = await res.json();
            const n = 4;
            console.log(data.sort(() => 1 - Math.random()).slice(0, n));
            setCountries(data.sort(() => 1 - Math.random()).slice(0, n));
            
        }

        useEffect(() => {
            ListOfCountry();
            
        }, [])
    
        const [ques, setQues] = useState("Wich country this flag belong to")
        console.log(ques);


    return (  
        <div>
            <p>{ques}</p>
            <img src="https://restcountries.eu/data/atg.svg" />
            {countries.map((country, index) => {
                return (
               <div key={index}> 
                  <button>{country.capital}</button>
               </div>
            )})
                }</div>
    )}
                
export default App