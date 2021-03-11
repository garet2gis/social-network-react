import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import {StyledButton} from "../styled/StyledButton";

const LoginStyled = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
    flex:1 0 100%;
    align-items:center;
    margin-bottom:10px;
`
const TestData = styled.div`
    font-size:12px;
    align-self:start;

`
const LoginFormStyled = styled.form`
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    width:50%;
    flex:0 0 50%;
    margin-bottom:10px;
    @media ${props => props.theme.media.phone}{
        flex:0 0 100%;
        width:100%;
    } 
    img{
        width:200px;
        align-self:center;
        margin:10px 0px;
    }
`
const StyledLoginButton = styled(StyledButton)`
    align-self:flex-end;
    margin:10px 0px;
`
const StyledError = styled.div`
    align-self:center;
    color:red;
`


const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    let onSubmit = (data) => {
        props.login(data);
    }
    return (
        <LoginStyled>
            <TestData>
                    <p>Test</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
            </TestData>

            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </LoginStyled>
    )
}

const Input = FormControl('input');
const maxLength20 = maxLengthCreator(20);


const LoginForm = (props) => {
    return (
        <LoginFormStyled onSubmit={props.handleSubmit}>
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

            {props.captchaUrl && <img src={props.captchaUrl} alt='captcha'/>}
            {props.captchaUrl &&
            <div>
                <Field placeholder={'Captcha'} name='captcha' component={Input}
                       validate={[required]}/>
            </div>}

            {props.error &&
            <StyledError>{props.error}</StyledError>}
            <StyledLoginButton type="submit" value="Login"/>
        </LoginFormStyled>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);