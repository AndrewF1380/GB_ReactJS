import React, { useState, useEffect } from "react";
import "./App.css";

function App() {  

  const [inputmessage, setInputMessage]=useState('');
  console.log(inputmessage);


  return  <div className="mainWrapper">
    <div className='messageList' >

    </div>

      <div className='inputWrapper'>
        <input className='input' value={inputmessage} onChange={e=>setInputMessage(e.target.value)} />
        <button>Отправить</button>
      </div>  
  </div>
}

export default App;