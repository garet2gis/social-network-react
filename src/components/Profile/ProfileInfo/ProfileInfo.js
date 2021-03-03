import React, {useEffect} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userAsset from '../../../assets/images/userAsset.png'
import ProfileStatus from "./ProfileStatus";
import ProfileTextInfoForm from "./ProfileTextInfoForm";
import styled from "styled-components";


export const ChangeAvatarButton = styled.label`
    position: absolute;
    bottom:5%;
    left: 50%;
    font-size: 100%;
    padding: 4px;
    width: 40%;
    margin-left:-20%;
    background-color: #555;
    color: lightgrey;
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
    
`

export const Avatar = styled.div`
    position: relative;
    display: inline-block;
    line-height: 0;
    min-width: 200px;
    img{
        width: 100%;
        
    }
    :hover ${ChangeAvatarButton}{
            transition: 0.3s;
            opacity: 0.7;
    }
`

export const LeftColumn = styled.div`
    flex: 0 0 40%;
    @media ${props => props.theme.media.phone}{
            flex: 0 0 100%;
    }
`
export const RightColumn = styled.div`
    flex: 0 0 50%;
    justify-self: center;
    @media ${props => props.theme.media.phone}{
            flex: 0 0 100%;
    }
`
export const ProfileWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-top:10px;
    ${LeftColumn} + ${RightColumn} {
        margin-left: 10px;
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
        <ProfileWrapper>
            <LeftColumn>
                <Avatar>
                    <img src={profile.photos.large ? profile.photos.large : userAsset}
                         alt='avatar'/>
                    {isOwner &&
                    <ChangeAvatarButton>
                        <input type={'file'} onChange={onSavePhoto}/>Change photo
                    </ChangeAvatarButton>
                    }
                </Avatar>
            </LeftColumn>

            <RightColumn>
                <StyledFullName>
                    {profile.fullName}
                </StyledFullName>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                <hr/>
                <ProfileTextInfo profile={profile} setEditMode={setEditMode} isOwner={isOwner}/>

                {(editMode) &&
                <ProfileTextInfoForm initialValues={profile} onSubmit={onSubmit} profile={profile}
                                     isOwner={isOwner}
                                     cancelSubmit={disableEditMode}/>}
            </RightColumn>
        </ProfileWrapper>
    )
}

export const StyledFullName = styled.div`
    font-size: 22px;
`

export const StyledInfoItem = styled.div`
    display:flex;
`
export const StyledTag = styled.div`
    flex: 0 0 40%;
    font-weight: bold;
`
export const StyledInfo = styled.div`
    flex: 1 0 60%;
`


const ProfileTextInfo = ({profile, setEditMode, isOwner}) => {
    return <div>
        <StyledInfoItem>
            <StyledTag>About me:</StyledTag>
            <StyledInfo>{profile.aboutMe}</StyledInfo>
        </StyledInfoItem>
        <StyledInfoItem>
            <StyledTag>Looking for a job: </StyledTag>
            <StyledInfo>{profile.lookingForAJob ? 'yes' : 'no'}</StyledInfo>
        </StyledInfoItem>
        {profile.lookingForAJob &&
        <StyledInfoItem>
            <StyledTag>Work preferences: </StyledTag>
            <StyledInfo>{profile.lookingForAJobDescription}</StyledInfo>
        </StyledInfoItem>}
        <hr/>
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
    return (<StyledInfoItem>
            {contactInfo &&
            <>
                <StyledTag>{contactType}: </StyledTag>
                <StyledInfo>{contactInfo}</StyledInfo>
            </>
            }
        </StyledInfoItem>
    )
}


export default ProfileInfo;