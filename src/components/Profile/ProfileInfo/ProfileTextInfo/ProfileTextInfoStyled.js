import styled from "styled-components";


export const StyledProfileTextInfo = styled.div`
    border: 2px solid ${props => props.theme.colorPalettes.second.other || 'black'};
    border-radius: ${props => props.theme.borderRadius || "0px"};
    padding: 1vh;
    word-break: break-all;
`

export const StyledLink = styled.a`
    text-decoration: none;
    color:${props => props.theme.colorPalettes.second.other || 'blue'};
    
    :visited{
        color:${props => props.theme.colorPalettes.second.other || 'blue'};
    }
    :hover{
        filter:brightness(110%);
    }
`