import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {match,authorizedUserId,history,getProfile,setUserStatus} = this.props;
        let userId = match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                history.push('/login');
            }
        }
        getProfile(userId);
        setUserStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id
    });

export default compose(
    connect(mapStateToProps, {getProfile, setUserStatus, updateUserStatus}),
    withRouter
    //withAuthRedirect
)
(ProfileContainer)
