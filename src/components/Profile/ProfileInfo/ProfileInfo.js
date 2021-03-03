import React, {useEffect} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userAsset from '../../../assets/images/userAsset.png'
import ProfileStatus from "./ProfileStatus";
import ProfileTextInfoForm from "./ProfileTextInfoForm";
import styled from "styled-components";


export const ChangeAvatarButton = styled.label`
    position: absolute;
    top:0;
    right:0;
    background-color: #555;
    color: lightgrey;
    font-size: 16px;
    padding: 1vh;
    display: block;
    border: none;
    cursor: pointer;
    text-align: center;
    opacity: 0;
    transition: 0.3s;
    line-height: 1;
    border-radius: 5px;
    input[type="file"] {
        display: none;
    }
    :hover {
        color: white;
        transition: 0.2s;
    }
    bottom: 15px;
    right: 15px;
`

export const Avatar = styled.div`
    position: relative;
    display: inline-block;
    line-height: 0;
    max-width: 100%;
    img{
        width: 100%;
        height: auto;
    }
    :hover ${ChangeAvatarButton}{
            transition: 0.3s;
            opacity: 0.7;
    }
`


export const ProfileWrapper = styled.div`
    display: flex;
    margin-top:10px;
    @media ${props => props.theme.media.phone}{
        flex-direction: column;
    }
`

export const LeftColumn = styled.div`
    flex: 0 0 35%;
`
export const RightColumn = styled.div`
    flex: 0 0 65%;
    margin-left: 20px;
    @media ${props => props.theme.media.phone}{
        margin-left: 0px;
    }
`


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
        <div>
            <div>
                <ProfileWrapper>
                    <LeftColumn>
                        <Avatar>
                            <img src={profile.photos.large ? profile.photos.large : userAsset}
                                 alt='avatar'/>
                            {isOwner &&
                            <ChangeAvatarButton>
                                <input type={'file'} onChange={onSavePhoto}/>
                            </ChangeAvatarButton>
                            }
                        </Avatar>
                    </LeftColumn>

                    <RightColumn>
                    <div>
                        {!(editMode) &&
                        <ProfileTextInfo profile={profile} setEditMode={setEditMode} isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>}
                        {(editMode) &&
                        <ProfileTextInfoForm initialValues={profile} onSubmit={onSubmit} profile={profile}
                                             isOwner={isOwner}
                                             cancelSubmit={disableEditMode}/>}
                    </div>
                    </RightColumn>
                </ProfileWrapper>

            </div>
        </div>
    )
}

export const StyledFullName = styled.div`
    font-size: 22px;
`


const ProfileTextInfo = ({profile, setEditMode, isOwner,status,updateUserStatus}) => {
    return <div>
        <StyledFullName>
            {profile.fullName}
        </StyledFullName>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
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
        {isOwner &&
        <div>
            <button onClick={setEditMode}>Edit</button>
        </div>}
    </div>
}


const Contact = ({contactType, contactInfo}) => {
    return (<div>
            {contactType}: {contactInfo}
        </div>
    )
}


export default ProfileInfo;