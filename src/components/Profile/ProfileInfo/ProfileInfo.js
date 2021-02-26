import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userAsset from '../../../assets/images/userAsset.png'
import ProfileStatus from "./ProfileStatus";
import ProfileTextInfoForm from "./ProfileTextInfoForm";

const ProfileInfo = ({profile, savePhoto, isOwner, status, updateUserStatus, editMode, toggleEditMode, saveProfile}) => {
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
    let onSubmit = (data) => {
        saveProfile(data);
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : userAsset}
                     className={classes.profilePhoto} alt='avatar'/>
                {isOwner && <input type={'file'} onChange={onSavePhoto}/>}
                <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                {!editMode &&
                <ProfileTextInfo profile={profile} toggleEditMode={toggleEditMode} isOwner={isOwner}/>}
                {editMode &&
                <ProfileTextInfoForm initialValues ={profile} onSubmit={onSubmit} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
}


const ProfileTextInfo = ({profile, toggleEditMode, isOwner}) => {
    return <div>
        {isOwner &&
        <div>
            <button onClick={toggleEditMode}>Edit</button>
        </div>}
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
                <Contact key={key} contactType={key} contactInfo={profile.contacts[key]}/>
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