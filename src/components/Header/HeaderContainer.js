import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserAuthData} from "../../redux/auth-reducer";
import authAPI from "../../api/authAPI";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authenticate()
            .then(data => {
                if (data.resultCode === 0)
                    this.props.setUserAuthData(data.data);
            })
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login:state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);