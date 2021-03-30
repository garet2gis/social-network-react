import React, {useEffect, useState} from "react";
import {PaginationButtonStyled, PageSelector, PaginationStyled} from "./PaginationStyled";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize: number
}


let Pagination: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

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


    const isActivePrev = portionSize>1
    const isActiveNext = portionNumber < portionsCount

    return (
        <PaginationStyled>
            <PaginationButtonStyled type="button" onClick={() => portionNumber > 1 && setPortionNumber(1)} value="First"
                                    isActive={isActivePrev} isFirst/>
            <PaginationButtonStyled type="button" onClick={() => portionNumber > 1 && setPortionNumber((x) => --x)}
                                    value="Prev"
                                    isActive={isActivePrev}/>
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
            <PaginationButtonStyled type="button"
                                    onClick={() => portionNumber < portionsCount && setPortionNumber((x) => ++x)}
                                    value="Next" isActive={isActiveNext}/>
            <PaginationButtonStyled type="button"
                                    onClick={() => portionNumber < portionsCount && setPortionNumber(portionsCount)}
                                    value="Last" isActive={isActiveNext} isLast/>
        </PaginationStyled>
    )
}

export default Pagination;