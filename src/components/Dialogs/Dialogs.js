import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElements = props.messages.map(m => <Message message={m.message}/>);

    let onSendMessageClick = () =>{
        props.addMessage();
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div className={classes.writeMessageArea}>
                <div>
                    <textarea onChange={onNewMessageChange} value={props.newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>New message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;