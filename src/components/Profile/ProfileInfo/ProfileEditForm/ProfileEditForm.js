import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../../common/FormsControls/FormsControls";
import {StyledInfoItem, TitleInfoItem, InfoItem, Contacts} from "../ProfileInfoStyled";
import {StyledButton} from "../../../styled/StyledButton";
import {StyledHR} from "../../../styled/StyledHR";
import {StyledModal, StyledModalOverlay} from "./ProfileEditFormStyled";

const Input = FormControl('input', '100%');
const Textarea = FormControl('textarea', '100%');

const createInfoFieldItem = (title, name, component, placeholder = null, validators = [], type = null) => {
    return <StyledInfoItem>
        <TitleInfoItem flexBasis='30%'>{title}</TitleInfoItem>
        <InfoItem flexBasis='70%'>
            <Field placeholder={placeholder} name={name} component={component}
                   validate={validators} type={type}/>
        </InfoItem>
    </StyledInfoItem>
}


const ProfileEditForm = ({profile, handleSubmit, cancelSubmit}) => {
    return (
        <StyledModalOverlay>
            <StyledModal onSubmit={handleSubmit}>
                {createInfoFieldItem('Full name: ', 'fullName', Input, 'full name')}
                <StyledHR/>
                {createInfoFieldItem('About me: ', 'aboutMe', Textarea, 'about me')}
                {createInfoFieldItem('Looking for a job: ', 'lookingForAJob', 'input', null, [], 'checkbox')}
                {createInfoFieldItem('Work preferences: ', 'lookingForAJobDescription', Textarea, 'work preferences')}
                <StyledHR/>
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
