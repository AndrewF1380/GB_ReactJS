import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { makeStyles } from '@material-ui/core/styles';
function App() {

  const [messagesArray, setMessagesArray] = useState([]);
  const useStyles = makeStyles(() => ({
    appWrapper: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    componentWrapper: {
      width: '600px',
      height: '600px',
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
    },


  }))
  // console.log(messagesArray);

  const classes = useStyles();

  const onSendMessage = (msg) => {
    setMessagesArray(prev => [...prev, { text: msg, author: "Andrew", man: true }]);
    // setInputMessage(' ');
  };
  useEffect(() => {
    if (messagesArray.length > 0 && messagesArray[messagesArray.length - 1].man)
      setTimeout(() => {
        setMessagesArray(prev => [...prev, { text: 'Я робот и нет у меня сердца', author: "RoBoT", man: false }]);
      }, 3000)
  }, [messagesArray]);

  return <div >
    <div className={classes.appWrapper}>
      <div className={classes.componentWrapper}>
        <MessagesList
          messagesArray={messagesArray} />
        <MessageInput
          onSendMessagedMsg={onSendMessage} />
      </div>
    </div>
  </div>
}

export default App;