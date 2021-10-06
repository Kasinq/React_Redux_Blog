import React from 'react'
import { useHistory } from 'react-router'
import style from './NewsCatalog.scss'

const NewsСatalog = ({ news }) => {
    const router = useHistory()
    const renderList = news.map(news => {
        const { id, title, body } = news
        return (
            <div key={id}>
                <img onClick={() => router.push(`/new/${id}`)} src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg" alt="" />
                <div onClick={() => router.push(`/new/${id}`)} className="title_inner">
                    <span className="title-card">{title}</span>
                </div>
                <div className="date"><span>July 22, 2021</span></div>
                <div className="text">
                    {body}
                </div>
                <button onClick={() => router.push(`/new/${id}`)}>Read More</button>
            </div>
        )
    })

    return (<div className="catalog" >
        {renderList}
    </div>
    )
}


export default NewsСatalog