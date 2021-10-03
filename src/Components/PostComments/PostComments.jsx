import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../Redux/actions/newsAction";
import OneComment from "./ViewComments/OneComment";
import AllComments from "./ViewComments/AllComments";

const PostComments = ({ newId, comments }) => {

    const dispatch = useDispatch()

    const fetchComments = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${newId}/comments`).catch((err) => {
            console.log('Err', err)
        })
        dispatch(setComments(response.data))
    }

    // створюємо змінну яка буде вказувать відкриті коменти чи закриті
    const [showHide, setShowHide] = useState(true)

    useEffect(() => {
        fetchComments()
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [newId])


    if (showHide) {
        return <>
            <OneComment comments={comments} setShowHide={setShowHide} />
            <hr />
        </>
    } return <>
        <AllComments comments={comments} setShowHide={setShowHide} />
        <hr />
    </>
}
export default PostComments