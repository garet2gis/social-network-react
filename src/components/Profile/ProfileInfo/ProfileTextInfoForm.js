import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../common/FormsControls/FormsControls";
import classes from "../../common/FormsControls/FormsControls.module.css";

const Input = FormControl('input');
const Textarea = FormControl('textarea');

const ProfileTextInfoForm = ({profile, isOwner, handleSubmit, error, cancelSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {isOwner &&
            <div>
                <button>Save</button>
            </div>}
            <button type="button" onClick={cancelSubmit}>
                Cancel
            </button>
            {error &&
            <div className={classes.formSummaryError}>{error}</div>}

            <div>
                Full name:
                <Field placeholder={'full name'} name='fullName' component={Input}
                       validate={[]}/>
            </div>
            <div>
                About me:
                <Field placeholder={'about me'} name='aboutMe' component={Textarea}
                       validate={[]}/>
            </div>
            <div>
                Looking for a job:
                <Field name='lookingForAJob' component='input'
                       validate={[]} type='checkbox'/>
            </div>
            <div>
                Work preferences: <Field placeholder={'work preferences'} name='lookingForAJobDescription'
                                         component={Textarea}
                                         validate={[]}/>
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key}>
                        {key}: <Field placeholder={key} name={`contacts.${key}`} component={Input} validate={[]}/>
                    </div>
                )
            })}
            </div>
        </form>
    )
}

const ProfileTextInfoReduxForm = reduxForm({form: 'profileEditForm'})(ProfileTextInfoForm);

export default ProfileTextInfoReduxForm;