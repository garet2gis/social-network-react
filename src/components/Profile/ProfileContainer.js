import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    savePhoto,
    saveProfile,
    setUserStatus,
    setEditMode,
    disableEditMode,
    updateUserStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    refreshProfile() {
        const {match, authorizedUserId, history, getProfile, setUserStatus} = this.props;
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
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     editMode={this.props.editMode}
                     setEditMode={this.props.setEditMode}
                     disableEditMode={this.props.disableEditMode}

            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id,
    editMode: state.profilePage.editMode
});

export default compose(
    connect(mapStateToProps, {
        getProfile,
        setUserStatus,
        updateUserStatus,
        savePhoto,
        disableEditMode,
        setEditMode,
        saveProfile
    }),
    withRouter
    //withAuthRedirect
)
(ProfileContainer)
