import React, { useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const MessageInput = ({onSendMessagedMsg})=>{
    const [inputMessage, setInputMessage] = useState('');

    const useStyles = makeStyles(() => ({
    
    
        input: {
            margin: '0px 10px',
            width: '69%',
        },
    
        button: {
            margin: '10px 10px',
        },
    }))
    
    const classes = useStyles();
    const sendMsg = () =>{
        onSendMessagedMsg(inputMessage);
        setInputMessage('');
    }
  return <div className=''>

    <TextField
        // className='input' 
        // multiline
        label="Введите сообщение"
        value={inputMessage}
        onChange={e => setInputMessage(e.target.value)}
        onKeyDown={({ key }) => {
            if (key === 'Enter') {
                sendMsg();
            }
        }}
        classes={{
            root: classes.input
        }}
    />
    <Button
        variant='contained'
        color='primary'
        // className={classes.button}
        classes={{ root: classes.button, }}
        onClick={sendMsg}>Отправить
    </Button>

</div>
}

export default MessageInput;
//df