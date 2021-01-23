import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/771823264540794880/1472852733/1500x500"
                     className='img_header'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;