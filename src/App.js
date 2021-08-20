import React, { useState, useEffect } from "react";
import "./App.css";

function App() {  

  const [inputMessage, setInputMessage]=useState('');
  const [messagesArray, setMessagesArray]  = useState([]);

  console.log(messagesArray);
  
  const onButoonClick = ()=>{
    setMessagesArray(prev => [...prev, inputMessage]);
    setInputMessage(' ');
  }

  return  <div className="mainWrapper">
    <div className='messageList' >
        {messagesArray.map((message) => (
            <div> {message} </div>
          ))}
    </div>

      <div className='inputWrapper'>
        <input className='input' value={inputMessage} onChange={e=>setInputMessage(e.target.value)} />
        <button onClick={onButoonClick}>Отправить</button>
      </div>  
  </div>
}

export default App;