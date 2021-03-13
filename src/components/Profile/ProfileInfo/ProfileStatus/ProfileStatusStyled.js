import styled, {css} from "styled-components";
import {StyledInput} from "../../../styled/StyledInput";


export const StyledProfileStatus = styled.span`
    font-size: 14px;
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
export const StyledStaticStatus = styled.div`
    min-height:40px;
    ${(props) => props.isOwner &&
    css`
    span{
           :hover{
               cursor: pointer;
               color:grey;
           }
           }
        `}
    
`