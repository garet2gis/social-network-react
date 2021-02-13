import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElements = props.messages.map(m => <Message id={m.id} message={m.message}/>);

    let onSubmit = (data) => {
        props.addMessage(data.message);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.writeMessageArea}>
            <div>
                <Field placeholder={'Enter message'} name='message' component='textarea'/>
            </div>
            <div>
                <button>New message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'message'})(DialogsForm)

export default Dialogs;