import React from "react";
import userAsset from '../../../../assets/images/userAsset.svg'
import styled from "styled-components";
import like from '../../../../assets/images/like.svg'

export const StyledPost = styled.div`
    flex: 0 0 100%;
    width:60%;
    border-radius: ${props => props.theme.borderRadius||"0px"};
    img {
        width:40px;
        border-radius: ${props => props.theme.borderRadius||"0px"};
    }
    margin:10px 0px;
    border: 2px solid ${props => props.theme.colorPalettes.second.other || 'black'};
    display:flex;
    flex-direction: column;
    align-self: center;
    background-color:#dfe7e8;
    padding:10px;
    @media ${props => props.theme.media.phone}{
        width:100%;
    }
    
`
export const StyledPhotoName = styled.div`
    flex: 0 0 100%;
    img {
        width:40px;
    }
    display: flex;
    align-items: center;
    
`
export const StyledLikes = styled.div`
    align-self:flex-end;
    display: flex;
    align-items: center;
    img{
        width:20px;
        margin-right:5px;
    }
`
export const StyledMessage = styled.div`
    
    margin-top: 10px;
`
export const StyledName = styled.div`
    align-self:start;
    margin-left:10px;
    font-weight:bold;
`


const Post = (props) => {
    return (
        <StyledPost>
            <StyledPhotoName>
                <img src={props.photo ? props.photo : userAsset} alt ="avatar"/>
                <StyledName>{props.fullName}</StyledName>
            </StyledPhotoName>

            <StyledMessage>{props.message}</StyledMessage>

            <StyledLikes> <img src={like} alt ="likePicture"/> {props.likeCount}</StyledLikes>

        </StyledPost>
    )
}
export default Post;