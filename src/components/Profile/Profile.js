import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = React.memo((props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
})
export default Profile;