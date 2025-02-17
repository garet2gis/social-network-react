import styled from "styled-components";


export interface StyledButtonType {

}

export const StyledButton = styled.input<StyledButtonType>`
    min-width:60px;
    min-height:30px;
    font-size: 15px;
    display:inline-block;
    margin:0.1em;
    border:0.15em solid ${props => props.theme.colorPalettes.second.other};
    color:white;
    background-color:${props => props.theme.colorPalettes.second.other};
    transition: 0.2s;
    text-align:center;
    cursor:pointer;
    font-weight:500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue";
    &:hover {
        filter: brightness(120%);
        transition: 0.4s;
    }
    &:active {
        background-color:#51737d;
        outline: 0;
    }
    &:focus {
        background-color:#51737d;
        outline: 0;
    }
    @media all and (max-width:30em){
        display:block;
        margin:0.2em auto;
    }
    border-radius: ${props => props.theme.borderRadius||"0px"};
    @media ${props => props.theme.media.phone}{
            margin:0px;
    }
    &:disabled{
        opacity:0.5;
        pointer-events: none;
    }
`
