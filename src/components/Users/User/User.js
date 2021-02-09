import React from "react";
import classes from './User.module.css';
import userAsset from '../../../assets/images/userAsset.png'
import {NavLink} from "react-router-dom";

let User = (props) => {
    return (
        <div className={classes.user}>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small === null ? userAsset : props.user.photos.small}
                         className={classes.avatar} alt="user"/>
                </NavLink>
            </div>
            <div>
                {props.user.followed
                    ? <button disabled={props.followingInProgress.some(u=>u===props.user.id)} onClick={
                        () => {props.unfollow(props.user.id);}
                    }>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(u=>u===props.user.id)} onClick={
                        () => {props.follow(props.user.id);}
                    }>Follow</button>}
            </div>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
        </div>
    )
}

export default User;