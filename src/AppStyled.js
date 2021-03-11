import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    max-width:1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-left:auto;
    margin-right:auto;
    background-color: ${props => props.theme.colorPalettes.second.header};
    min-height: 100vh;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: -15px;
    margin-left: -15px;
    flex-grow: 1; 
    @media ${props => props.theme.media.phone}{
        flex-direction: column;
    }
    
`

export const FlexItemContent = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 80%;
    max-width: 80%;
    background: ${props => props.theme.colorPalettes.second.body};
    @media ${props => props.theme.media.phone}{
        flex: 1 0 100%;
        max-width: 100%;
        border-radius: 0px;
    }
    border-radius: ${props => props.theme.borderRadius||"0px"};
`