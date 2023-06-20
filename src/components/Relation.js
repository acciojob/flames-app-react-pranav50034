import React, { useState } from "react";

const Relation = () => {
   const [name1, setName1] = useState("");
   const [name2, setName2] = useState("");
   const [relationshipStatus, setRelationshipStatus] = useState("");

   const handleName1Change = (event) => {
      setName1(event.target.value);
   };

   const handleName2Change = (event) => {
      setName2(event.target.value);
   };

   const handleCalculateRelationship = () => {
      if (name1.trim() === "" || name2.trim() === "") {
         setRelationshipStatus("Please Enter valid input");
         return;
      }

      const name1Set = new Set(name1);
      const name2Set = new Set(name2);
      const commonLetters = new Set(
         [...name1Set].filter((letter) => name2Set.has(letter))
      );

      const remainingName1 = name1.replace(
         new RegExp(`[${Array.from(commonLetters).join("")}]`, "g"),
         ""
      );
      const remainingName2 = name2.replace(
         new RegExp(`[${Array.from(commonLetters).join("")}]`, "g"),
         ""
      );

      const relationshipValue =
         (remainingName1.length + remainingName2.length) % 6;

      switch (relationshipValue) {
         case 1:
            setRelationshipStatus("Friends");
            break;
         case 2:
            setRelationshipStatus("Love");
            break;
         case 3:
            setRelationshipStatus("Affection");
            break;
         case 4:
            setRelationshipStatus("Marriage");
            break;
         case 5:
            setRelationshipStatus("Enemy");
            break;
         case 0:
            setRelationshipStatus("Siblings");
            break;
         default:
            setRelationshipStatus("");
      }
   };
   

   const handleClear = () => {
      setName1("");
      setName2("");
      setRelationshipStatus("");
   };
   return (
      <div>
         <input
            type="text"
            id="name1"
            value={name1}
            onChange={handleName1Change}
            data-testid="input1"
            name="name1"
            placeholder="Enter first name"
         />

         <input
            type="text"
            id="name2"
            value={name2}
            onChange={handleName2Change}
            data-testid="input2"
            name="name2"
            placeholder="Enter second name"
         />

         <button
            onClick={handleCalculateRelationship}
            data-testid="calculate_relationship"
         >
            Calculate Relationship Future
         </button>
         <button onClick={handleClear} data-testid="clear">
            Clear
         </button>
         <h3 data-testid="answer">{relationshipStatus}</h3>
      </div>
   );
};

export default Relation;
