import React from "react";
import {StyledInput} from "../../styled/StyledInput";
import {ErrorStyled, FormControlStyled} from "./FormsControlsStyled";


export const FormControl = (Element, width = '100%', isNeedErrors = true) => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <FormControlStyled hasError={isNeedErrors ? hasError : false}>
            <StyledInput width={width}>
                <Element {...input} {...props} />
            </StyledInput>
            {isNeedErrors && <ErrorStyled> {hasError && meta.error} </ErrorStyled>}
        </FormControlStyled>
    );
};
