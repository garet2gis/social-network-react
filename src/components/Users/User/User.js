import React from "react";
import classes from './User.module.css';
import userAsset from '../../../assets/images/userAsset.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let User = (props) => {
    let onFollow = () => props.follow(props.user.id);
    let onUnFollow = () => props.unfollow(props.user.id)
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
                        () => {
                            props.toggleFollowingProgress(true,props.user.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,{
                                withCredentials: true,
                                headers: {"API-KEY":"7e127611-be10-4a25-97f0-44bab15fc4c4"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        onUnFollow();
                                    }
                                    props.toggleFollowingProgress(false,props.user.id);
                                })
                        }
                    }>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(u=>u===props.user.id)} onClick={
                        () => {
                            props.toggleFollowingProgress(true,props.user.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,{},{
                                withCredentials: true,
                                headers: {"API-KEY":"7e127611-be10-4a25-97f0-44bab15fc4c4"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        onFollow();
                                    }
                                    props.toggleFollowingProgress(false,props.user.id);
                                })
                        }
                    }>Follow</button>}
            </div>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
            <div>{'props.user.location.city'}</div>
            <div>{'props.user.location.country'}</div>
        </div>
    )
}

export default User;