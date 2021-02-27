import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css"

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to='/Profile'/>
    }
    let onSubmit = (data) => {
        props.login(data);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const Input = FormControl('input');
const maxLength20 = maxLengthCreator(20);


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name='email' component={Input}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name='password' component={Input}
                       type='password'
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field type={'checkbox'} name='rememberMe' component='input'/> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} alt = 'captcha'/>}
            {props.captchaUrl &&
            <div>
                <Field placeholder={'Captcha'} name='captcha' component={Input}
                       validate={[required]}/>
            </div>}

            {props.error &&
            <div className={classes.formSummaryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);