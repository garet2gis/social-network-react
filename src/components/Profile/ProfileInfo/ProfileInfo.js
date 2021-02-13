import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userAsset from '../../../assets/images/userAsset.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large:userAsset} className={classes.profilePhoto} alt='avatar'/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;