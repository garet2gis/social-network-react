import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserAuthData} from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0)
                    this.props.setUserAuthData(response.data.data);
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