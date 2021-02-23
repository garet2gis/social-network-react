import React from "react";
import classes from './Pagination.module.css'
import classNames from 'classnames'

let Pagination = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div>
            {
                pages.map(p => {
                    return <span
                        className={classNames(currentPage === p && classes.selectedPage, classes.pageNumber)}
                        onClick={() => {
                            onPageChanged(p);
                        }} key={p}>{` ${p} `}</span>
                })
            }
        </div>
    )
}

export default Pagination;