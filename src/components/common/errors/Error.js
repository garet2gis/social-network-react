import React from "react";
import styled from "styled-components";


const ErrorStyled = styled.h1`
    display:flex;
    justify-content:center;
`

const Error = ({error}) => {
    return (
        <ErrorStyled>
            {error ? {error} : '404 NOT FOUND'}
        </ErrorStyled>
    )
}

export default Error;