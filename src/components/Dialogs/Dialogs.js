import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

    let onSendMessageClick = () =>{
        props.dispatch(addMessageCreator());
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
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
                    <textarea onChange={onNewMessageChange} value={props.state.newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>New message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;