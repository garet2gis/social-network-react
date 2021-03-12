import styled from 'styled-components';

export const FormControlStyled = styled.div`
    input, textarea {
        border: 
        ${props => {
            if (props.hasError) return 'solid red 2px';
        }};
        &:focus{
           border-color: 
           ${props => {
                if (props.hasError) return 'red';
           }};
        }
    }
`

export const ErrorStyled = styled.div`
    min-height:20px;
    font-size: 12px;
    color: red;
`