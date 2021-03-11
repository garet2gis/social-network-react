import React, {useEffect, useRef} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm, reset} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {isMessage} from "../../utils/validators/validators";
import styled from "styled-components";
import {StyledButton} from "../styled/StyledButton";


const DialogsWrapper = styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex:1 0 100%;
    justify-content: space-between;
    @media ${props => props.theme.media.phone}{
        flex-direction:column;
    } 
`
const DialogsStyled = styled.div`
    display: flex;
    flex-direction:column;
    flex:0 0 30%;
    @media ${props => props.theme.media.phone}{
        flex:0 0 100%;
        flex-direction:row;
        flex-wrap:wrap;
    } 
   
`


const MessageWindowStyled = styled.div`
    display: flex;
    flex-direction:column;
    flex:0 0 70%;
    
    @media ${props => props.theme.media.phone}{
        flex:1 0 100%;
    } 
   
    
`
const MessageWrapper = styled.div`
    display: flex;
    flex-direction:column;
    flex-grow:1;
    overflow-y:scroll;
    height:100px;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colorPalettes.second.other}; 
        border-radius: ${props => props.theme.borderRadius || "0px"};
        width:5px;
        height:5px;
    }
      
`


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
                <MessageWrapper>
                    {messageElements}
                    <div ref={messagesEnd}/>
                </MessageWrapper>
                <DialogsReduxForm onSubmit={onSubmit} messages={messages}/>
            </MessageWindowStyled>
        </DialogsWrapper>


    )
}

const Textarea = FormControl('textarea', '100%', false);


const SendMessageFormStyled = styled.form`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin:10px 0px;
`
const StyledButtonFlexEnd = styled(StyledButton)`
    align-self:center;
    
`
const FlexTextarea = styled.div`
    flex: 0 0 80%;
`

const DialogsForm = (props) => {
    const addMessage = e => {
        if (e.key === "Enter" && e.shiftKey === false) {
            e.preventDefault();
            if (e.target.value) {
                props.handleSubmit(props.values);
            }
        }
    }

    return (
        <SendMessageFormStyled onSubmit={props.handleSubmit}>
            <FlexTextarea>
                <Field placeholder={'Enter message'} name='message' component={Textarea}
                       validate={[isMessage]} onKeyPress={addMessage}/>
            </FlexTextarea>
            <StyledButtonFlexEnd type="submit" value="Send"/>

        </SendMessageFormStyled>
    )
}


const afterSubmit = (formValues, dispatch) => {
    dispatch(reset("message"));
}


const DialogsReduxForm = reduxForm({form: 'message', onSubmitSuccess: afterSubmit})(DialogsForm)

export default Dialogs;