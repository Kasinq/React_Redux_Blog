import React from 'react'
import './Pagination.scss'

const Pagination = ({pagesArray, setPage, page}) => {

    return (
        <div className="pagination">
            {
                pagesArray.map(p =>
                    <span className={page === p ? 'pageCurrent' : 'page'} onClick={() => setPage(p)} key={p}>
                        {p}
                    </span>
                )
            }
        </div>
    )
}

export default Pagination






