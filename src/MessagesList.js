import React, { useState, useEffect, useCallback } from "react";
import Message from "./Message";
const MessagesList = ()=> {
    const [inputMessage, setInputMessage]=useState('');
    const [messagesArray, setMessagesArray]  = useState([]);
  
    console.log(messagesArray);
    
    const onSendMessage = useCallback ( ()=>{
      setMessagesArray(prev => [...prev, {text:inputMessage,author:"Andry"}]);
      setInputMessage(' ');
    },[inputMessage]);

    return <div> 
    <div className='messageList' >
    {messagesArray.map((message, i) => (
        <div key={i}> 
        <Message 
        text={message.text}
        author={message.author}
        /> </div>
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
export default MessagesList;
