import React from "react";
import styled from "styled-components";

const MessageStyled = styled.div`
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border: 2px solid ${props => props.theme.colorPalettes.second.other};
    border-radius: ${props => props.theme.borderRadius || "0px"};
    margin: 7px 0px;
    align-self:center;
    width:90%;
    padding:5px;
    background-color:white;
`

const Message = (props) => {
    return (
        <MessageStyled>
            {props.message}
        </MessageStyled>
    )
}

export default Message;