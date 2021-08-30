import React, { useState, useEffect, useCallback } from "react";
import Message from "./Message";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles =makeStyles(()=>({
    input: {
        margin:'0px 10px',   
    },

    button: {
        margin:'10px 100px', 
    },
}))

const MessagesList = ()=> {
    const [inputMessage, setInputMessage]=useState('');
    const [messagesArray, setMessagesArray]  = useState([]);
  
    // console.log(messagesArray);
    
    const classes = useStyles();

    const onSendMessage = useCallback ( ()=>{
      setMessagesArray(prev => [...prev, {text:inputMessage,author:"Andrew",man:true}]);
      setInputMessage(' ');
    },[inputMessage]);
    useEffect (()=>{
        if (messagesArray.length>0 && messagesArray[messagesArray.length-1].man)
        setTimeout(() => {
            setMessagesArray(prev => [...prev, {text:'Я робот и нет у меня сердца',author:"RoBoT",man:false}]);
        }, 3000) },[messagesArray]); 
    return <div> 
        <div className="mainWrapper">
    <div className='messageList' >
    {messagesArray.map((message, i) => (
        <div key={i}> 
        <Message 
        text={message.text}
        author={message.author}
        /> </div>
      ))}
        </div>

  <div className=''>
    
    <TextField 
    // className='input' 
    label="Введите сообщение"
    value={inputMessage} 
    onChange={e=>setInputMessage(e.target.value)} 
    onKeyDown = {({key}) => {
      if (key=== 'Enter'){
        onSendMessage();
      }
    } }
    classes={{
        root: classes.input
    }}
    />
    <Button
        variant='contained' 
        color ='primary' 
        // className={classes.button}
        classes={{root :classes.button,}}
        onClick={onSendMessage}>Отправить
    </Button>

  </div> 
  </div>
  </div>
}
export default MessagesList;
//dslf

