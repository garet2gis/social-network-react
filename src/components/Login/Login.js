import React from 'react';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm/LoginForm";

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
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </LoginStyled>
    )
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);