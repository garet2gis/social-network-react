import React, {useEffect, useState} from "react";

import styled, {css} from "styled-components";
import {StyledButton} from "../../styled/StyledButton";

const PageSelector = styled.span`
    border: 1px solid ${props => props.theme.colorPalettes.second.other};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${props => props.theme.colorPalettes.second.nav};
    :hover{
        background-color: ${props => props.theme.colorPalettes.second.other};
        border-color: ${props => props.theme.colorPalettes.second.other};
        filter: brightness(120%);
        color: white;
        cursor:pointer;
    }
    ${(props) => props.isCurrent &&
    css`
        background-color: ${props => props.theme.colorPalettes.second.other};
        border-color: ${props => props.theme.colorPalettes.second.other};
        filter: brightness(90%);
        pointer-events: none;
        color: white;
    `}
    
    
`

const PaginationStyled = styled.div`
    margin: 5px 0px;
    display: flex;
    width: 100%;
    justify-content:center;
    align-items: center;
`

const CustomButton = styled(StyledButton)`
     height: 30px;
     border-radius: 0px;
     
     ${(props) => {
        if (props.isPrev) 
            return css`
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;`
        else 
            return css`
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;`
        
     }}
     margin:0px;
     ${(props) => !props.isActive && css`pointer-events: none;
                                         color:white;
                                         opacity: 0.4;
                                         
                                            
                                            `}
     
`

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {


    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    useEffect(() => {
        let currentPortion = Math.ceil(currentPage / portionSize);
        setPortionNumber(currentPortion);
    }, [currentPage, portionSize]);

    let leftPortionPageNumber = ((portionNumber - 1) * portionSize) + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <PaginationStyled>

            <CustomButton type="button" onClick={() => portionNumber > 1 && setPortionNumber((x) => --x)} value="Prev" isActive={portionNumber > 1} isPrev/>

            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                    return <PageSelector
                        onClick={() => {
                            p !== currentPage && onPageChanged(p);
                        }}
                        key={p}
                        isCurrent={p === currentPage}>
                        {` ${p} `}
                    </PageSelector>
                })
            }

            <CustomButton type="button" onClick={() => portionNumber < portionsCount && setPortionNumber((x) => ++x)} value="Next" isActive={portionNumber < portionsCount}/>

        </PaginationStyled>
    )
}

export default Pagination;