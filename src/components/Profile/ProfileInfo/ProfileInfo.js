import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userAsset from '../../../assets/images/userAsset.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, savePhoto, isOwner, status, updateUserStatus}) => {
    if (!profile) {
        return (
            <Preloader/>
        )
    }
    const onSavePhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : userAsset}
                     className={classes.profilePhoto} alt='avatar'/>
                {isOwner && <input type={'file'} onChange={onSavePhoto}/>}
                <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                <ProfileTextInfo profile={profile}/>

            </div>
        </div>
    )
}


const ProfileTextInfo = ({profile}) => {
    return <div>
        <div>
            Full name: {profile.fullName}
        </div>
        <div>
            About me: {profile.aboutMe}
        </div>
        <div>
            Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            Work preferences: {profile.lookingForAJobDescription}
        </div>}
        <div>
            Contacts: {Object.keys(profile.contacts).map(key => {
            return (
                <Contact contactType={key} contactInfo={profile.contacts[key]}/>
            )
        })}
        </div>
    </div>
}


const Contact = ({contactType, contactInfo}) => {
    return (<div className={classes.contact}>
            {contactType}: {contactInfo}
        </div>
    )
}


export default ProfileInfo;