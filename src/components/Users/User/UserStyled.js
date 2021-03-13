import {NavLink} from "react-router-dom";
import styled from "styled-components";


export const StyledUserLink = styled.div`
   display:flex;
   width:100%;
   height:100%;
   transition: 0.3s;
   background-color:${props => props.theme.colorPalettes.second.body || 'grey'};
   :hover{
       filter:brightness(110%); 
       transition: 0.3s;
   }
   img{
       align-self:center;
       width: 100px;
       border-radius: ${props => props.theme.borderRadius || "0px"};
   }
   padding:10px;
   border-bottom: 2px solid ${props => props.theme.colorPalettes.second.other || 'black'};
   word-break: break-all;
`


export const StyledNavLink = styled(NavLink)`
   width:100%;
   height:100%;
   display:flex;
   text-decoration: none;
   :visited{
        color:${props => props.theme.colorPalettes.second.other || 'blue'};
   }
   
`

export const StyledUser = styled.div`
   width:40%;
   @media ${props => props.theme.media.phone}{
        width:100%;
    }
    display:flex;
    justify-content:space-evenly;
    position:relative;
    max-height:40%;
`

export const StyledName = styled.div`
   color:${props => props.theme.colorPalettes.second.other || 'blue'};
   
`
export const StyledStatus = styled.div`
   color: green;
   font-size:14px;
`
export const StyledUserText = styled.div`
   display:flex;
   flex-direction:column;
   flex-grow:1;
   text-align:center;
   
`
export const ButtonWrapper = styled.div`
    position:absolute;
    top:90%;
    left:90%;
    transform:translate(-90%, -90%);
`
