import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const Login = (props) => {
    let onSubmit = (data) => {
        props.login(data);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name='email' component='input'/>
            </div>
            <div>
                <Field placeholder={'Password'} name='password' component='input'/>
            </div>
            <div>
                <Field type={'checkbox'} name='rememberMe' component='input'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = () => ({})

export default connect(mapStateToProps, {login})(Login);