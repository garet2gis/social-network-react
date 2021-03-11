import React from "react";
import styled, {css} from "styled-components";

const DialogItemStyled = styled.div`
    display:flex;
    background-color:${props => props.theme.colorPalettes.second.body};
    transition: 0.3s;
    padding:30px;
    :hover{
        transition: 0.7s;
        filter:brightness(120%);
    }
    @media ${props => props.theme.media.phone}{
        padding:2px;
        flex-grow:1;
        margin-bottom:5px;
    } 
    
    ${(props) => props.isFirst &&
    css`
        filter:brightness(90%);
        :hover{
            filter:brightness(90%);
        }
    `}
    
    
    
    

`


const DialogItem = (props) => {
    //let path = `/dialogs/${props.id}`
    let isFirst = false;
    //hardcode

    if (props.name === 'Dmitry') {
        isFirst = true;
    }

    return (
        <DialogItemStyled isFirst = {isFirst}>
            {/*<NavLink to={path}>{props.name}</NavLink>*/}
            {props.name}
        </DialogItemStyled>
    )
}

export default DialogItem;