import React from "react";
import classes from './User.module.css';


let User = (props) => {
    let onFollow = () => props.follow(props.user.id);
    let onUnFollow = () => props.unfollow(props.user.id)
    return (
        <div className={classes.user}>
            <img src={props.user.photoUrl} className={classes.avatar}/>
            {props.user.followed
                ? <button onClick={onUnFollow}>Unfollow</button>
                : <button onClick={onFollow}>Follow</button>}
            <div>{props.user.fullName}</div>
            <div>{props.user.status}</div>
            <div>{props.user.location.city}</div>
            <div>{props.user.location.country}</div>
        </div>
    )
}

export default User;