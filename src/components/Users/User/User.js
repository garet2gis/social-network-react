import React from "react";
import classes from './User.module.css';
import userAsset from '../../../assets/images/userAsset.png'
import {NavLink} from "react-router-dom";

let User = (props) => {
    let onFollow = () => props.follow(props.user.id);
    let onUnFollow = () => props.unfollow(props.user.id)
    return (
        <div className={classes.user}>
            <div>
                <NavLink to = {`/profile/${props.user.id}`}>
                <img src={props.user.photos.small === null ? userAsset : props.user.photos.small}
                     className={classes.avatar} alt = "user"/>
                </NavLink>
            </div>
            <div>
                {props.user.followed
                    ? <button onClick={onUnFollow}>Unfollow</button>
                    : <button onClick={onFollow}>Follow</button>}
            </div>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
            <div>{'props.user.location.city'}</div>
            <div>{'props.user.location.country'}</div>
        </div>
    )
}

export default User;