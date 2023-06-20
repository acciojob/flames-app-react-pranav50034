import React, { Component, useState } from "react";
import "../styles/App.css";
import Relation from "./Relation";

class App extends Component {
   render() {
      return (
         <div id="main">
            {/* Do not remove the main div */}
            <Relation />
         </div>
      );
   }
}

export default App;
