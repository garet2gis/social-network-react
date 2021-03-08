import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = React.memo(({isOwner,profile, ...props}) => {
    return (
        <>
            <ProfileInfo isOwner={isOwner} profile = {profile} {...props}/>
            {isOwner && <MyPostsContainer photo = {profile ? profile.photos.small : null} fullName = {profile ? profile.fullName : null}/>}
        </>
    )
})
export default Profile;