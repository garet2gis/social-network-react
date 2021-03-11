import React from "react";
import styled from "styled-components";


const Error404Styled = styled.h1`
    display:flex;
    justify-content:center;
`

const Error404 = () => {
    return (
        <Error404Styled>
            404 NOT FOUND
        </Error404Styled>
    )
}
export default Error404;