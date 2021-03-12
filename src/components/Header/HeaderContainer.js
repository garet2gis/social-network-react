import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    logoutRedirect = async () =>{
        await this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        return <Header isAuth = {this.props.isAuth} login = {this.props.login} logout = {this.logoutRedirect} />
    }
}

let mapStateToProps = (state) => ({
    login:state.auth.login,
    isAuth: state.auth.isAuth,
})


export default compose(
    connect(mapStateToProps, {logout}),
    withRouter
)(HeaderContainer);
