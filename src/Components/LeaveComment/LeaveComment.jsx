import React, { useState, useSelector, useEffect } from "react";
import style from "./LeaveComment.module.css"

const LeaveComment = ({ newId, comments }) => {

    // додаємо коментар 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    let foo

    const addComment = (e) => {
        e.preventDefault()
        if (comment && email )
        foo = comments.push({postId: newId, id: Date.now(), name: name, email: email, body: comment })
        else alert("Поля відмічені '*' обов'язкові до заповнення")
        setName('') 
        setEmail('')
        setComment('')
    }

    return (
        <div className={style.leaveComment}>
            <div className={style.headerText} >
                <span>Leave a Comment</span>
            </div>
            <div className={style.desc}>Your email address will not be published. Required fields are marked *</div >
            <form>
                <span>Comment</span>
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    maxLength='600'
                    cols="45" rows="8"></textarea>
                <div className={style.comentatorInfo}>
                    <div>
                        <span>Name*</span>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Name*"
                            type="text" />
                    </div>
                    <div>
                        <span>Email*</span>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email*"
                            type="text" />
                    </div>
                    <div className={style.webSite}>
                        <span>Website</span>
                        <input placeholder="Website" type="text" />
                    </div>
                </div>
                <button onClick={addComment} className={style.btn}>Post Comment</button>
            </form>
        </div>

    )
}

export default LeaveComment