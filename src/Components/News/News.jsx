import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setNews } from "../../Redux/actions/newsAction";
import Futer from "../Futer/Futer";
import Preloader from "../UI/Preloader/Preloader";
import { getPageCount, getpagesArray } from "../utils/pages";
import style from './News.module.css'
import PageBacgroundHeader from "../UI/PageBacgroundHeader/PageBacgroundHeader";
import Pagination from "../UI/Pagination/Pagination";
import NewsСatalog from "./NewsСatalog/NewsСatalog";
import AddNewsForm from "./AddNewsForm/AddNewsForm";

const News = () => {
    const news = useSelector((state) => state.newsPage.news)
    const dispatch = useDispatch()

    // перевикористовуємо фонову картинку 
    const [imagePath] = useState(['https://themes.themegoods.com/letsblog/demo/wp-admin/admin-ajax.php?action=letsblog_blurred&src=https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/1.jpg', `url('https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/1.jpg')`])
    const [pageTitle] = useState(['PAGE BACKGROUND HEADER', 'THIS IS OPTIONAL PAGE TITLE'])

    const [limit] = useState(6)
    const [page, setPage] = useState(1)
    const pageCount = getPageCount(useSelector(state => state.newsPage.totalCount), limit)
    const pagesArray = getpagesArray(pageCount)

    const [isLoading, setIsLoading] = useState(true)

    const fetchNews = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        }).catch((err) => {
            console.log('Err', err)
        })
        setIsLoading(false)
        const totalCount = response.headers['x-total-count']
        dispatch(setNews(response.data, totalCount))
    }

    //додавання новин
    const [modal, setModal] = useState(false)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    let foo

    const addNew = (e) => {
        e.preventDefault()
        foo = sortedAndSearchNews.unshift({ id: Date.now(), title: title, body: body })
        setModal(false)
        setTitle('')
        setBody('')
    }
    //додавання новин

    //пошук
    const [search, setSearch] = useState('')

    const sortedPost = useMemo(() => {
        if (search) {
            return news
        } return news
    }, [news, foo])

    const sortedAndSearchNews = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPost])

    //пошук

    useEffect(() => {
        fetchNews()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [page]) // щоб додавання новин працювало додайте foo  в квадратні скобки


    return (<>
        <PageBacgroundHeader imagePath={imagePath} pageTitle={pageTitle}>
            <input className={style.bg_inp} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search" />
        </PageBacgroundHeader>
        <AddNewsForm modal={modal} setModal={setModal} addNew={addNew} title={title} body={body} setTitle={setTitle} setBody={setBody} />
            {sortedAndSearchNews.length
                ? <></>
                : <div>Пости не знайдені</div>
            }
        <div className={style.container}>
            {isLoading
                ? <Preloader />
                : <NewsСatalog news={sortedAndSearchNews} />
            }
            <Pagination pagesArray={pagesArray} setPage={setPage} page={page} />
        </div>
        <Futer />
    </>)
}

export default News