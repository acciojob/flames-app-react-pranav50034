import React, { useState} from "react";
import '../styles/App.css';

const App = ()=>{
        
        let [status, setStatus] = useState()

        let relation = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"]

        function checkStatus(e) {
            e.preventDefault();
            if (
                e.target[0].value.trim() === "" ||
               e.target[1].value.trim() === ""
               ) {
                   setStatus("Please Enter valid input");
                   return
                }
                
                let s1 = e.target[0].value.trim().split('');
                let s2 = e.target[1].value.trim().split('');
                
                setStatus(relation[(s1.length+s2.length)%6])

        }

        return (
           <div id="main">
              <form onSubmit={checkStatus}>
                 <input placeholder="Enter first name" data-testid="input1" type="text" />
                 <input placeholder="Enter second name" data-testid="input2" type="text" />
                 <button data-testid="calculate_relationship" type="submit">
                    Calculate Relationship Future
                 </button>
                 <button data-testid="clear" type="submit">
                    Clear
                 </button>
              </form>
              {
                setStatus && (
                    <h3 data-testid="answer">{status}</h3>
                )
              }
           </div>
        );
    }


export default App;
