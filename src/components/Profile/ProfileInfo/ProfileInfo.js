import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            <div>
                <img src='https://pbs.twimg.com/profile_banners/771823264540794880/1472852733/1500x500'
                     className='img_header' alt='background'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='avatar'/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;