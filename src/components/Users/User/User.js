import React from "react";
import userAsset from '../../../assets/images/userAsset.svg'
import {StyledButton} from "../../styled/StyledButton";
import {
    ButtonWrapper,
    StyledName,
    StyledNavLink,
    StyledStatus,
    StyledUser,
    StyledUserLink,
    StyledUserText
} from "./UserStyled";


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