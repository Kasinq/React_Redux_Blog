import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setNews } from "../../Redux/actions/newsAction";
import style from "./PostRelated.module.css"

const PostRelated = () => {

    const router = useHistory()

    const news = useSelector((state) => state.newsPage.news)
    const dispatch = useDispatch()
    const [limit] = useState(3)
    const [page] = useState(1)


    const fetchNews = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        }).catch((err) => {
            console.log('Err', err)
        })
        const totalCount = response.headers['x-total-count']
        dispatch(setNews(response.data, totalCount))
    }

    useEffect(() => {
        fetchNews(news)
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [page])

    return (
    <div className={style.otherPosts}>
        <div className={style.headerText} >
            <span>YOU MIGHT ALSO LIKE</span>
        </div>
        <div className={style.inner}>
            {news.map(news =>
                <div key={news.id} className={style.content} >
                    <img onClick={() => router.push(`/new/${news.id}`)} src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg" alt="" />
                    <div onClick={() => router.push(`/new/${news.id}`)} className={style.title}>
                        {news.title}
                    </div>
                    <div className={style.date}>July 22, 2021</div>
                </div>
            )}
        </div>
        <hr />
    </div>
    )
}

export default PostRelated