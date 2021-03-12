import React, {useEffect, useRef} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsForm from "./DialogsForm/DialogsForm";
import {DialogsStyled, DialogsWrapper, MessageWindowStyled, MessagesWrapper} from "./DialogsStyled";

const Dialogs = ({dialogs, messages, addMessage}) => {
    let dialogElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messageElements = messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    let messagesEnd = useRef(null);

    let onSubmit = (data) => {

        addMessage(data.message);
    }

    useEffect(() => {
        messagesEnd.current.scrollIntoView({behavior: "auto"});
    }, [messages]);

    return (
        <DialogsWrapper>
            <DialogsStyled>
                {dialogElements}
            </DialogsStyled>
            <MessageWindowStyled>
                <MessagesWrapper>
                    {messageElements}
                    <div ref={messagesEnd}/>
                </MessagesWrapper>
                <DialogsForm onSubmit={onSubmit} messages={messages}/>
            </MessageWindowStyled>
        </DialogsWrapper>


    )
}

export default Dialogs;