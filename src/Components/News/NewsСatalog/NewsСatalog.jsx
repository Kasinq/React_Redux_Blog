import React from 'react'
import { useHistory } from 'react-router'
import style from './NewsCatalog.module.css'

const NewsСatalog = ({news}) => {
    const router = useHistory()

    const renderList = news.map(news => {
        const { id, title, body } = news
        return (
            <div key={id} className={style.content} >
                <img onClick={() => router.push(`/new/${id}`)} src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg" alt="" />
                <div onClick={() => router.push(`/new/${id}`)} className={style.title_inner}>
                    <span className={style.title}>{title}</span>
                </div>
                <div className={style.date}><span>July 22, 2021</span></div>
                <div className={style.text}>
                    {body}
                </div>
                <button onClick={() => router.push(`/new/${id}`)}>Read More</button>
            </div>
        )
    })

    return (<>
        { renderList }
    </>)
}


export default NewsСatalog