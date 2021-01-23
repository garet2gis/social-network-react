import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message}/>);


    let newMessageElement = React.createRef();

    let addNewMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text)
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
                    <textarea ref = {newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addNewMessage}>New message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;