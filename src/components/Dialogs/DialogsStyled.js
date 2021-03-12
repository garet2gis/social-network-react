import styled from "styled-components";

export const DialogsWrapper = styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex:1 0 100%;
    justify-content: space-between;
    @media ${props => props.theme.media.phone}{
        flex-direction:column;
    } 
`

export const DialogsStyled = styled.div`
    display: flex;
    flex-direction:column;
    flex:0 0 30%;
    @media ${props => props.theme.media.phone}{
        flex:0 0 100%;
        flex-direction:row;
        flex-wrap:wrap;
    } 
`


export const MessageWindowStyled = styled.div`
    display: flex;
    flex-direction:column;
    flex:0 0 70%;
    @media ${props => props.theme.media.phone}{
        flex:1 0 100%;
    } 
`

export const MessagesWrapper = styled.div`
    display: flex;
    flex-direction:column;
    flex-grow:1;
    overflow-y:scroll;
    height:100px;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colorPalettes.second.other}; 
        border-radius: ${props => props.theme.borderRadius || "0px"};
        width:5px;
        height:5px;
    }
      
`
