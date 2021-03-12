import React from "react";
import loader from '../../../assets/images/loader.svg'
import styled from "styled-components";


export const PreloaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top:${props => props.marginTop || 'auto'};
`

let Preloader = ({marginTop}) => {
    return (
        <PreloaderWrapper marginTop={marginTop}>
            <img src={loader} alt='loader'/>
        </PreloaderWrapper>
    )
}
export default Preloader;