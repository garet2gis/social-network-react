import styled, {css} from "styled-components";
import {StyledButton} from "../../styled/StyledButton";


export interface PageSelectorPropsType {
    isCurrent: boolean
}


export const PageSelector = styled.span<PageSelectorPropsType>`
    border: 1px solid ${(props )=> props.theme.colorPalettes.second.other};
    width: 35px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${(props ) => props.theme.colorPalettes.second.nav};
    :hover{
        background-color: ${props => props.theme.colorPalettes.second.other};
        border-color: ${(props ) => props.theme.colorPalettes.second.other};
        filter: brightness(120%);
        color: white;
        cursor:pointer;
    }
    ${(props) => props.isCurrent &&
    css`
        background-color: ${(props) => props.theme.colorPalettes.second.other};
        border-color: ${(props) => props.theme.colorPalettes.second.other};
        filter: brightness(90%);
        pointer-events: none;
        color: white;
    `}
    @media ${(props) => props.theme.media.phone}{
        font-size:13px;
        width: 25px;
        height: 25px;
    }
`

export const PaginationStyled = styled.div`
    margin: 5px 0px;
    display: flex;
    width: 100%;
    justify-content:center;
    align-items: center;
`

export interface PaginationButtonStyledPropsType {
    isFirst?: boolean
    isLast?: boolean
    isActive: boolean
}

export const PaginationButtonStyled = styled(StyledButton)<PaginationButtonStyledPropsType>`
     height: 30px;
     border-radius: 0px;
     margin:0px;
     ${(props) => {
        if (props.isFirst) 
            return css`
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                border-right: 2px solid ${props => props.theme.colorPalettes.second.body};
                `
        else if (props.isLast)
            return css`
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                border-left: 2px solid ${props => props.theme.colorPalettes.second.body};`
        
     }}
     ${(props) => !props.isActive &&
        css`pointer-events: none;
            color:white;
            opacity: 0.4;                                                       
     `}
     @media ${props => props.theme.media.phone}{
        font-size:13px;
        min-width:23px;
        min-height:25px;
        height:25px;
     }
`
