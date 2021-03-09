import styled from "styled-components";

export const FlexItemNavbar = styled.div`
    border-radius: ${props => props.theme.borderRadius||"0px"};
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 15%;
    position: relative;
    background: ${props => props.theme.colorPalettes.second.nav};
    @media ${props => props.theme.media.phone}{
        border-radius: 0px;
        position: sticky;
        top:-2px;
        padding-top:5px;
        z-index:1;
        padding-right: 0px;
        padding-left: 0px;
    }
`

export const StyledNavbar = styled.nav`
    margin-top:10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    position: sticky;
    top:0px;
    a{
        text-decoration: none;
        padding-bottom: 10px;
        color:black;
        &:hover{
            color:${props => props.theme.colorPalettes.second.header};
        }
    }
    padding: 0px;
    @media ${props => props.theme.media.phone}{
        font-size: 14px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        
    }
`

