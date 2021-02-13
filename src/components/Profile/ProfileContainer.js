import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; //from url
        if (!userId) userId = 14632; // hardcode, my acc
        this.props.getProfile(userId);
        this.props.setUserStatus(userId);
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
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getProfile, setUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer)
