import React, {useEffect, useState} from 'react';
import styled from "styled-components";

export const StyledProfileStatus = styled.div`
    font-size: 14px;
    min-height: 30px;
    
    :hover span{
        color:grey;
        cursor: pointer;
    }
    
`


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
            <div>
                <span onClick={activateEditMode}>{props.status || '----'}</span>
            </div>}

            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </div>}
        </StyledProfileStatus>
    )
}

export default ProfileStatus;