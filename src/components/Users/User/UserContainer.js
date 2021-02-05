import React from "react";
import userAPI from "../../../api/userAPI";
import User from "./User";

class UserContainer extends React.Component {
    onFollowClick = () => {
        this.props.toggleFollowingProgress(true, this.props.user.id);
        userAPI.follow(this.props.user.id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(this.props.user.id);
                }
                this.props.toggleFollowingProgress(false, this.props.user.id);
            })
    }
    onUnfollowClick = () => {
        this.props.toggleFollowingProgress(true, this.props.user.id);
        userAPI.unfollow(this.props.user.id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(this.props.user.id)
                }
                this.props.toggleFollowingProgress(false, this.props.user.id);
            })

    }
    render() {
        return(
            <User onFollowClick = {this.onFollowClick}
                  onUnfollowClick = {this.onUnfollowClick}
                  user = {this.props.user}
                  followingInProgress ={this.props.followingInProgress}
            />
        )
    }
}

export default UserContainer;