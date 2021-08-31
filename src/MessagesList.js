import React, { useState, useEffect, useCallback } from "react";
import Message from "./Message";
import { makeStyles } from '@material-ui/core/styles';

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

const MessagesList = ({ messagesArray }) => {
    const classes = useStyles();

    return <div className='messageList' >
        {messagesArray.map((message, i) => (
            <div key={i}>
                <Message
                    text={message.text}
                    author={message.author}
                /> </div>
        ))}
    </div>

}
export default MessagesList;

