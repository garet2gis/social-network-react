import React from 'react';

import {StyledInfoItem, TitleInfoItem, InfoItem, Contacts} from "../ProfileInfoStyled";
import {StyledButton} from "../../../styled/StyledButton";
import styled from "styled-components";


const StyledProfileTextInfo = styled.div`
    border: 2px solid ${props => props.theme.colorPalettes.second.other || 'black'};
    border-radius: ${props => props.theme.borderRadius || "0px"};
    padding: 1vh;
`

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
            <hr/>
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


const Contact = ({contactType, contactInfo}) => {
    return (
        <>
            {contactInfo &&
            createInfoItem(`${contactType}: `, contactInfo)}
        </>
    )
}

export default ProfileTextInfo;