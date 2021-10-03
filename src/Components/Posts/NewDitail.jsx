import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import Futer from "../Futer/Futer"
import PageBacgroundHeader from "../UI/PageBacgroundHeader/PageBacgroundHeader"
import Post from "./Post/Post"
import AuthorInfo from "./AuthorInfo/AuthorInfo"
import { selectedNew } from "../../Redux/actions/newsAction"
import PostComments from "../PostComments/PostComments"
import style from "./NewDitail.module.css"
import PostRelated from "../PostRelated/PostRelated"
import LeaveComment from "../LeaveComment/LeaveComment"
import IcoMenu from "../UI/IcoMenu/IcoMenu"


const Posts = () => {
    const newId = useParams()

    const [imagePath] = useState(['https://themes.themegoods.com/letsblog/demo/wp-admin/admin-ajax.php?action=letsblog_blurred&src=https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg', `url('https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg')`])
    const [pageTitle] = useState(['', ''])

    const news = useSelector((state) => state.newPage)
    const dispatch = useDispatch()

    const comments = useSelector((state) => state.newComments.comments)

    const fetchNewDetail = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${newId.id}`).catch((err) => {
            console.log('Err', err)
        })
        dispatch(selectedNew(response.data))
    }
    useEffect(() => {
        if (newId.id && newId.id !== '') fetchNewDetail()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [newId.id])

    return (
        <>
            <PageBacgroundHeader imagePath={imagePath} pageTitle={pageTitle} />
            <div className={style.container}>
                <div className={style.inner}>
                    <div className={style.postInfo}>
                        <Post news={news} />
                        <PostComments newId={newId.id} comments={comments} />
                        <PostRelated news={news} />
                        <LeaveComment newId={newId.id} comments={comments} />
                    </div>
                    <span className={style.author}>
                        <AuthorInfo />
                    </span>
                </div>
            </div>
            <Futer />
        </>
    )
}

export default Posts
