import React, { useState, useEffect } from "react";
import "./App.css";
import MyComponent from "./MyComponent";


function App() {
  const [inputText, setInputText] = useState("");
  const [count, setCount]=useState(0);

console.log('Count - ', count);

const onInputChange = (e) => {
  setCount(count +1);
  setInputText(e.target.value);
}

useEffect (()=>{
  console.log('Mounted')
},[])

useEffect (()=>{
  console.log('onUpdate')
})

  return (
    <div>
      <input
        value={inputText}
        onChange={onInputChange}
        style={{
          width: 400,
          height: 100,
          color: "red",
        }}
      />

      <MyComponent textToShow={inputText} />
    </div>
  );
}

export default App;