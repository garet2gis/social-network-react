import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {StyledInput} from "../../styled/StyledInput";


export const StyledProfileStatus = styled.span`
    font-size: 14px;
    min-height: 40px;
    :hover{
        cursor: pointer;
        color:grey;
    }
`
export const StyledEditModeStatus = styled(StyledInput)`
    min-height: 40px;
    input{
        font-size:14px;
        height: 25px;
        min-height: 25px;
        background-color: #e4eff0;
    }
`
export const StyledStatus = styled(StyledInput)`
    min-height: 40px;
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
                <StyledStatus onClick={activateEditMode}>{props.status || '----'}</StyledStatus>
            }
            {editMode &&
            <StyledEditModeStatus>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </StyledEditModeStatus>}
        </StyledProfileStatus>
    )
}

export default ProfileStatus;