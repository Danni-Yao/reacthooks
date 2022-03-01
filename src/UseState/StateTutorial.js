import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("useState Hook: ");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <br></br>
      <h1>React Hooks Study <a href="url">GitHub</a></h1>
      {inputValue}
      <input placeholder="enter something..." onChange={onChange} />
      
    </div>
  );
};

export default StateTutorial;
