import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = ({dialogs,messages,addMessage}) => {
    let dialogElements = dialogs.map(d => <DialogItem key = {d.id} id={d.id} name={d.name}/>);
    let messageElements = messages.map(m => <Message  key = {m.id} id={m.id} message={m.message}/>);

    let onSubmit = (data) => {
        addMessage(data.message);
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

const Textarea = FormControl('textarea');
const maxLength50 = maxLengthCreator(50);


const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.writeMessageArea}>
            <div>
                <Field placeholder={'Enter message'} name='message' component={Textarea}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>New message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'message'})(DialogsForm)

export default Dialogs;