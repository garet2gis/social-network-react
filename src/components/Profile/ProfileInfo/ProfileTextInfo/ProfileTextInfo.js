import React from 'react';
import {StyledInfoItem, TitleInfoItem, InfoItem, Contacts} from "../ProfileInfoStyled";
import {StyledButton} from "../../../styled/StyledButton";
import {StyledHR} from "../../../styled/StyledHR";
import {StyledLink, StyledProfileTextInfo} from "./ProfileTextInfoStyled";


const createInfoItem = (title, info) => {
    return <StyledInfoItem>
        <TitleInfoItem>{title}</TitleInfoItem>
        <InfoItem>{info}</InfoItem>
    </StyledInfoItem>
}

const ProfileTextInfo = ({profile, setEditMode, isOwner}) => {
    return <StyledProfileTextInfo>
        {createInfoItem('About me: ', profile.aboutMe)}
        {createInfoItem('Looking for a job: ', profile.lookingForAJob ? 'yes' : 'no')}
        {profile.lookingForAJob &&
        createInfoItem('Work preferences: ', profile.lookingForAJobDescription)}

        {Object.keys(profile.contacts).filter((key) => {
            return Boolean(profile.contacts[key]);
        }).length > 0 &&
        <Contacts>
            <StyledHR/>
            Contacts: {Object.keys(profile.contacts).map(key => {
            return (
                <Contact key={key} contactType={key} contactInfo={profile.contacts[key]}/>
            )
        })}
        </Contacts>
        }
        <StyledInfoItem padding="5px" justifyContent="flex-end">
            {isOwner && <StyledButton type="button" onClick={setEditMode} value="Edit"/>}
        </StyledInfoItem>
    </StyledProfileTextInfo>
}

const getCorrectHref = (contactInfo) =>{
    const isCorrectLink = contactInfo.match(/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s]*$/) || [];
    const isHaveProtocol = Boolean(isCorrectLink[1]);
    let correctHref = '*/';
    if (isCorrectLink.length > 0) {
        if (!isHaveProtocol){
            correctHref = 'https://' + contactInfo;
        }
        else{
            correctHref = contactInfo
        }
    }
    return correctHref;
}



const Contact = ({contactType, contactInfo}) => {
    return (
        <>
            {contactInfo &&
            <StyledInfoItem>
                <TitleInfoItem>{contactType}</TitleInfoItem>
                <InfoItem>
                    <StyledLink href={getCorrectHref(contactInfo)}>{contactInfo}</StyledLink>
                </InfoItem>
            </StyledInfoItem>}
        </>
    )
}

export default ProfileTextInfo;