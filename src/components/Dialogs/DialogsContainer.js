import React from "react";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () =>{
        props.store.dispatch(addMessageCreator());
    }

    let updateNewMessageBody = (body) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs addMessage = {addMessage} updateNewMessageBody = {updateNewMessageBody}
                 dialogs = {state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                 newMessageBody = {state.dialogsPage.newMessageBody}/>
    )
}
export default DialogsContainer;