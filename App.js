import React, { useEffect, useState } from "react"


function App() {
    const [countries, setCountries] = useState([]);

    const url = "https://restcountries.eu/rest/v2/";

        const ListOfCountry = async () => {

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setCountries(data)
            
        }

        useEffect(() => {
            ListOfCountry();
        }, [])
    

    return (  
        <div>
            
            {countries.map((country, index) => {
                return (
               <div key={index}>
                  <button>{country.capital}</button>
               </div>)}
            
            )}
            </div>
    )}
                
export default App