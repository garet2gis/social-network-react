import styled from "styled-components";

export const StyledModalOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.7);
    z-index:2;
`

export const StyledModal = styled.form`
  margin:auto;
  width:50%;
  background-color:${props => props.theme.colorPalettes.second.body};
  border-radius:${props => props.theme.borderRadius || "0px"};
  @media ${props => props.theme.media.phone}{
    flex:1 0 100%;
    width: 100%;
  }
  padding: 0px 10px;
  z-index:2;
`


