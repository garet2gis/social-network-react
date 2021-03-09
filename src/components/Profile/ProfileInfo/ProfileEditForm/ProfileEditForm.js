import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../../common/FormsControls/FormsControls";
import classes from "../../../common/FormsControls/FormsControls.module.css";
import styled from "styled-components";
import {StyledInfoItem, TitleInfoItem, InfoItem, Contacts} from "../ProfileInfoStyled";
import {StyledButton} from "../../../styled/StyledButton";

const Input = FormControl('input', '100%');
const Textarea = FormControl('textarea', '100%');

export const StyledModalOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.7);
    z-index:2;
`

export const StyledModal = styled.form`
  margin:auto;
  width:50%;
  background-color:${props => props.theme.colorPalettes.second.body};
  border-radius:${props => props.theme.borderRadius||"0px"};
  @media ${props => props.theme.media.phone}{
    flex:1 0 100%;
    width: 100%;
  }
  padding: 0px 10px;
  z-index:2;
`

const createInfoFieldItem = (title, name, component, placeholder = null, validators = [], type = null) => {
    return <StyledInfoItem>
        <TitleInfoItem flexBasis='30%'>{title}</TitleInfoItem>
        <InfoItem flexBasis='70%'>
            <Field placeholder={placeholder} name={name} component={component}
                   validate={validators} type={type}/>
        </InfoItem>
    </StyledInfoItem>
}


const ProfileEditForm = ({profile, handleSubmit, error, cancelSubmit}) => {
    return (
        <StyledModalOverlay>

            <StyledModal onSubmit={handleSubmit}>
                {error &&
                <div className={classes.formSummaryError}>{error}</div>}

                {createInfoFieldItem('Full name: ', 'fullName', Input, 'full name')}
                <hr/>
                {createInfoFieldItem('About me: ', 'aboutMe', Textarea, 'about me')}
                {createInfoFieldItem('Looking for a job: ', 'lookingForAJob', 'input', null, [], 'checkbox')}
                {createInfoFieldItem('Work preferences: ', 'lookingForAJobDescription', Textarea, 'work preferences')}
                <hr/>
                <Contacts>
                    Contacts: {Object.keys(profile.contacts).map(key => {
                    return (
                        <StyledInfoItem key={key}>
                            <TitleInfoItem flexBasis='30%'>{key}:</TitleInfoItem>
                            <InfoItem flexBasis='70%'>
                                <Field placeholder={key} name={`contacts.${key}`} component={Input}
                                       validate={[]}/>
                            </InfoItem>
                        </StyledInfoItem>
                    )
                })}
                </Contacts>
                <StyledInfoItem justifyContent = "space-evenly">
                    <StyledButton type="submit" value="Save"/>
                    <StyledButton type="button" onClick={cancelSubmit} value="Cancel"/>
                </StyledInfoItem>
            </StyledModal>

        </StyledModalOverlay>
    )
}


const ProfileTextInfoReduxForm = reduxForm({form: 'profileEditForm'})(ProfileEditForm);

export default ProfileTextInfoReduxForm;



