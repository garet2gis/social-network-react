import React, {useEffect, useState} from 'react';
import {StyledEditModeStatus, StyledProfileStatus, StyledStaticStatus} from "./ProfileStatusStyled";


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        props.isOwner && setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <StyledProfileStatus>
            {!editMode &&
            <StyledStaticStatus isOwner={props.isOwner}>
                <span onClick={activateEditMode}>{props.status || '----'}</span>
            </StyledStaticStatus>
            }
            {editMode &&
            <StyledEditModeStatus>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </StyledEditModeStatus>}
        </StyledProfileStatus>
    )
}

export default ProfileStatus;