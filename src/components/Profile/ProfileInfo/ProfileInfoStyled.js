
import styled from 'styled-components';

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
    margin-top:1vh;
    border-radius: ${props => props.theme.borderRadius||"0px"};
    img{
        border-radius: ${props => props.theme.borderRadius||"0px"};
        width: 100%;
        max-width:300px;
        background: white;
    }
    :hover ${ChangeAvatarButton}{
            transition: 0.3s;
            opacity: 0.7;
    }
`

export const Column = styled.div`
    flex: 0 0 ${props => props.flexBasis || '100%'};
    display: ${props => props.display || 'block'};
    @media ${props => props.theme.media.phone}{
            flex: 0 0 100%;
    }
`

export const ProfileWrapper = styled.div`
    justify-content: space-around;
    display: flex;
    flex-wrap:wrap;
    margin-top:10px;
`


export const StyledFullName = styled.div`
    font-size: 22px;
`

export const StyledInfoItem = styled.div`
    display:flex;
    margin:8px;
    padding: ${props => props.padding || '0px'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
`

export const TitleInfoItem = styled.div`
    flex: 0 0 ${props => props.flexBasis || '40%'};
    font-weight: ${props => props.fontWeight || 'bold'};
`

export const InfoItem = styled.div`
    flex: 1 0 ${props => props.flexBasis || '60%'};
    font-weight: ${props => props.fontWeight || 'normal'};
`

export const Contacts = styled.div`
    font-weight: ${props => props.fontWeight || 'bold'};
`
