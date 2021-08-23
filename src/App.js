import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {  

  const [inputMessage, setInputMessage]=useState('');
  const [messagesArray, setMessagesArray]  = useState([]);

  console.log(messagesArray);
  
  const onSendMessage = useCallback ( ()=>{
    setMessagesArray(prev => [...prev, inputMessage]);
    setInputMessage(' ');
  },[inputMessage]);



  

  return  <div className="mainWrapper">
    <div className='messageList' >
        {messagesArray.map((message, i) => (
            <div key={i}> {message} </div>
          ))}
    </div>

      <div className='inputWrapper'>
        <input 
        className='input' 
        value={inputMessage} 
        onChange={e=>setInputMessage(e.target.value)} 
        onKeyDown = {({key}) => {
          if (key=== 'Enter'){
            onSendMessage();
          }
        } }
        />
        <button onClick={onSendMessage}>Отправить</button>
      </div>  
  </div>
}

export default App;