import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../common/FormsControls/FormsControls";
import classes from "../../common/FormsControls/FormsControls.module.css";
import styled from "styled-components";

const Input = FormControl('input');
const Textarea = FormControl('textarea');

export const StyledInfoItem = styled.div`
    display:flex;
`
export const StyledTag = styled.div`
    flex: 0 0 40%;
    font-weight: bold;
`
export const StyledInfo = styled.div`
    flex: 1 0 60%;
`

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
    background-color: rgba(0, 0, 0, 0.7);
`

export const StyledModal = styled.div`
  width: 60%;
  background-color:pink;
  @media ${props => props.theme.media.phone}{
            width: 95%;
  }
`

export const StyledButtons = styled.button`

`


const ProfileTextInfoForm = ({profile, handleSubmit, error, cancelSubmit}) => {
    return (
        <StyledModalOverlay>
            <StyledModal>
                <form onSubmit={handleSubmit}>
                    {error &&
                    <div className={classes.formSummaryError}>{error}</div>}
                    <StyledInfoItem>
                        <StyledTag>Full name:</StyledTag>
                        <StyledInfo>
                            <Field placeholder={'full name'} name='fullName' component={Input}
                                   validate={[]}/>
                        </StyledInfo>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledTag>About me:</StyledTag>
                        <StyledInfo>
                            <Field placeholder={'about me'} name='aboutMe' component={Textarea}
                                   validate={[]}/>
                        </StyledInfo>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledTag>Looking for a job:</StyledTag>
                        <StyledInfo>
                            <Field name='lookingForAJob' component='input'
                                   validate={[]} type='checkbox'/>
                        </StyledInfo>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledTag>Work preferences: </StyledTag>
                        <StyledInfo>
                            <Field placeholder={'work preferences'} name='lookingForAJobDescription'
                                   component={Textarea}
                                   validate={[]}/>
                        </StyledInfo>
                    </StyledInfoItem>
                    <div>
                        Contacts: {Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                {key}: <Field placeholder={key} name={`contacts.${key}`} component={Input}
                                              validate={[]}/>
                            </div>
                        )
                    })}
                    </div>

                    <StyledButtons>Save</StyledButtons>

                    <StyledButtons type="button" onClick={cancelSubmit}>
                        Cancel
                    </StyledButtons>
                </form>
            </StyledModal>
        </StyledModalOverlay>
    )
}


const ProfileTextInfoReduxForm = reduxForm({form: 'profileEditForm'})(ProfileTextInfoForm);

export default ProfileTextInfoReduxForm;



