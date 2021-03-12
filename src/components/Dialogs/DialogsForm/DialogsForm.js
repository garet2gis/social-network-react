import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {FormControl} from "../../common/FormsControls/FormsControls";
import {isMessage} from "../../../utils/validators/validators";
import styled from "styled-components";
import {StyledButton} from "../../styled/StyledButton";

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

const Textarea = FormControl('textarea', '100%', false);

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


export default reduxForm({form: 'message', onSubmitSuccess: afterSubmit})(DialogsForm)
