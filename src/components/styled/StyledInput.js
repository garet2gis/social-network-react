import styled from "styled-components";

export const StyledInput = styled.div`
  input, textarea{
    font-size: 16px;
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid #8b8a8b;
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;
    width:${props => props.width||'100%'};
    &:focus{
        border-color: ${props => props.theme.colorPalettes.second.other};
        box-shadow: 0 0 0 3px
            hsla(194, 42%, 13%, 0.2);
        outline: 3px solid transparent;
    }
    &::placeholder {
        color: ${props => {
                    if (props.isError) return 'red';
                    }};
    }
  }
  input{
        line-height: 1;
        height: 2.25rem;
  }
  textarea{
        resize: none;
  }
  
  
`

