import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MessagesList from "./MessagesList";
import Button from '@material-ui/core/Button';
function App() {  

  // const [inputMessage, setInputMessage]=useState('');
  // const [messagesArray, setMessagesArray]  = useState([]);

  // console.log(messagesArray);
  
  // const onSendMessage = useCallback ( ()=>{
  //   setMessagesArray(prev => [...prev, inputMessage]);
  //   setInputMessage(' ');
  // },[inputMessage]);

  return  <div >
          <MessagesList/>
          </div>
}

export default App;