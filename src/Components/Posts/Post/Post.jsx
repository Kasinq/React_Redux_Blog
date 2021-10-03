import React, { useState } from "react";
import IcoMenu from "../../UI/IcoMenu/IcoMenu";
import style from "./Post.module.css"

const Post = ({news}) => {

    // длинний опис поста
    const [postText] = useState(['Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor', 'Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes'])
    // опис картинки
    const [imgText] = useState('Travelling all around the world.')
    // мотиваційна фраза
    const [phraseText] = useState('GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE. GREAT DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.')
    // кінцевий текст
    const [endText] = useState('Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes')
  

    return (<>
        <div className={style.content}>
            <h1 className={style.title}>
                {news.title}
                <IcoMenu />
            </h1>
            <div className={style.date}><span>July 22, 2021</span></div>
            <div className={style.longDescriptrion}>
                <p>{postText[0]}</p>
                <p>{postText[1]}</p>
            </div>
            <img src="../images/postDitail.jpg" alt="" />
            <div className={style.imgDescriptrion}>{imgText}</div>
            <div className={style.longDescriptrion}>
                <p>{news.body}</p>
            </div>
            <div className={style.phrase}>
                {phraseText}
            </div>
            <p>{endText}</p>
        </div>
        <hr />
    </>)
}

export default Post