import React, {useEffect} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userAsset from '../../../assets/images/userAsset.svg'
import ProfileStatus from "./ProfileStatus";
import ProfileEditForm from "./ProfileEditForm/ProfileEditForm";
import {
    Avatar,
    ChangeAvatarButton, Column,
    ProfileWrapper,
    StyledFullName
} from "./ProfileInfoStyled";
import ProfileTextInfo from "./ProfileTextInfo/ProfileTextInfo";


const ProfileInfo = ({profile, savePhoto, isOwner, status, updateUserStatus, editMode, setEditMode, disableEditMode, saveProfile}) => {
    useEffect(() => {
        return () => {
            disableEditMode();
        };
    }, [disableEditMode]);


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
        <ProfileWrapper>
            <Column flexBasis='40%'>
                <Avatar>
                    <img src={profile.photos.large ? profile.photos.large : userAsset}
                         alt='avatar'/>
                    {isOwner &&
                    <ChangeAvatarButton>
                        <input type={'file'} onChange={onSavePhoto}/>Change photo
                    </ChangeAvatarButton>
                    }
                </Avatar>
            </Column>

            <Column flexBasis='50%'>
                <StyledFullName>
                    {profile.fullName}
                </StyledFullName>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                <ProfileTextInfo profile={profile} setEditMode={setEditMode} isOwner={isOwner}/>
                {(editMode) &&
                <ProfileEditForm initialValues={profile} onSubmit={onSubmit} profile={profile}
                                 isOwner={isOwner}
                                 cancelSubmit={disableEditMode}/>}
            </Column>
        </ProfileWrapper>
    )
}

export default ProfileInfo;