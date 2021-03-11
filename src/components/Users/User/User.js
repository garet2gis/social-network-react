import React from "react";

import userAsset from '../../../assets/images/userAsset.svg'
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {StyledButton} from "../../styled/StyledButton";


export const StyledUserLink = styled.div`
   display:flex;
   width:100%;
   height:100%;
   transition: 0.3s;
   background-color:${props => props.theme.colorPalettes.second.body || 'grey'};
   :hover{
       filter:brightness(110%); 
       transition: 0.3s;
   }
   img{
       align-self:center;
       width: 100px;
       border-radius: ${props => props.theme.borderRadius || "0px"};
   }
   padding:10px;
   border: 2px solid ${props => props.theme.colorPalettes.second.other || 'black'};
   border-radius: ${props => props.theme.borderRadius || "0px"};
   word-break: break-all;
`


export const StyledNavLink = styled(NavLink)`
   width:100%;
   height:100%;
   display:flex;
   text-decoration: none;
   :visited{
        color:${props => props.theme.colorPalettes.second.other || 'blue'};
   }
   
`

export const StyledUser = styled.div`
   width:40%;
   @media ${props => props.theme.media.phone}{
        width:100%;
    }
    margin: 5px 0px;
    display:flex;
    justify-content:space-evenly;
    //align-items:center;
    //flex-direction:column;
    position:relative;
    max-height:40%;
`

export const StyledName = styled.div`
   color:${props => props.theme.colorPalettes.second.other || 'blue'};
   
`
export const StyledStatus = styled.div`
   color: green;
   font-size:14px;
`
export const StyledUserText = styled.div`
   display:flex;
   flex-direction:column;
   flex-grow:1;
   text-align:center;
   
`
export const ButtonWrapper = styled.div`
    //align-self:flex-end;
    position:absolute;
    top:90%;
    left:90%;
    transform:translate(-90%, -90%);
`


let User = (props) => {
    return (
        <StyledUser>
            <StyledUserLink>
                <StyledNavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small === null ? userAsset : props.user.photos.small} alt="user"/>
                    <StyledUserText>
                        <StyledName>{props.user.name}</StyledName>
                        <StyledStatus>{props.user.status}</StyledStatus>
                    </StyledUserText>
                </StyledNavLink>
            </StyledUserLink>
            <ButtonWrapper>
                {props.user.followed
                    ? <StyledButton type="button"
                                    value="Unfollow"
                                    disabled={props.followingInProgress.some(u => u === props.user.id)}
                                    onClick={
                                        () => {
                                            props.unfollow(props.user.id);
                                        }}/>
                    : <StyledButton type="button"
                                    value="Follow"
                                    disabled={props.followingInProgress.some(u => u === props.user.id)}
                                    onClick={
                                        () => {
                                            props.follow(props.user.id);
                                        }}/>
                }
            </ButtonWrapper>
        </StyledUser>
    )
}

export default User;