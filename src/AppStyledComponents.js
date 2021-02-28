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
    background-color: aliceblue;
    min-height: 100vh;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    flex-grow: 1; 
`


export const FlexItemContent = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 80%;
    max-width: 80%;
    background: lemonchiffon;
    @media ${props => props.theme.media.phone}{
        flex: 0 0 100%;
        max-width: 100%;
    }
`