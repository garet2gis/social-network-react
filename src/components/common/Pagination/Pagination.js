import React, {useState} from "react";
import classes from './Pagination.module.css'
import classNames from 'classnames'

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {


    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);


    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = ((portionNumber - 1) * portionSize) + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber((x) => --x)}>Prev</button>}
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                    return <span
                        className={classNames(currentPage === p && classes.selectedPage, classes.pageNumber)}
                        onClick={() => {
                            onPageChanged(p);
                        }} key={p}>{` ${p} `}</span>
                })
            }
            {portionNumber < portionsCount &&
            <button onClick={() => setPortionNumber((x) => ++x)}>Next</button>}
        </div>
    )
}

export default Pagination;