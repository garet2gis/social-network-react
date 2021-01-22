import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/771823264540794880/1472852733/1500x500"
                     className='img_header'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;