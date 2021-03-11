import React from "react";
import {StyledInput} from "../../styled/StyledInput";
import styled from 'styled-components';

const FormControlStyled = styled.div`
    input, textarea {
        border: ${props => {
    if (props.hasError) return 'solid red 2px';
}};
        &:focus{
            border-color: ${props => {
    if (props.hasError) return 'red';
}};
        }
    }
    
`
const ErrorStyled = styled.div`
    min-height:20px;
    font-size: 12px;
    color: red;
`


export const FormControl = (Element, width = '100%', isNeedErrors = true) => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    if (!isNeedErrors)
        return <FormControlStyled>
            <StyledInput width={width}>
                <Element {...input} {...props} />
            </StyledInput>
        </FormControlStyled>

    return (
        <FormControlStyled hasError={hasError}>
            <StyledInput width={width}>
                <Element {...input} {...props} />
            </StyledInput>
            <ErrorStyled> {hasError && meta.error} </ErrorStyled>
        </FormControlStyled>
    );
};

