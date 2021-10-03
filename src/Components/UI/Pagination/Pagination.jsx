import React from 'react'
import style from './Pagination.module.css'

const Pagination = ({pagesArray, setPage, page}) => {

    return (
        <div className={style.pagitation}>
            {
                pagesArray.map(p =>
                    <span className={page === p ? style.pageCurrent : style.page} onClick={() => setPage(p)} key={p}>
                        {p}
                    </span>
                )
            }
        </div>
    )
}

export default Pagination






