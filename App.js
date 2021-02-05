import React from "react"
import Options from "./Options"
import Results from "./Results"


function App() {
    return (
        <div className="container">
            <div className="header">
               <h1>Country quiz</h1>
               <img  className="headerimg" src="./undraw_adventure_4hum 1.svg" />
            </div>
            <div>
                <Options />
                <Results />
            </div>
        </div>
    )
}
                
export default App