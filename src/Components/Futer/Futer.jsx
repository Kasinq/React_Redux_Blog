import React from "react";
import style from "./Futer.module.css"

const Futer = () => {
    return (
        <div className={style.futer}>
            <div className={style.inner}>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/themes/letsblog/images/logo@2x_white.png" />
                <form>
                    <div className={style.title}>SUBSCRIPTION</div>
                    <div><input className={style.inp} type="text" placeholder="Your email address" /></div>
                    <button className={style.button}>SUBSCRIBE</button>
                </form>
                <div className={style.recentNews}>
                    <div className={style.recentNews_inner}>
                        <div className={style.title}>RECENT POSTS</div>
                        <a href="#">BEAUTY OF NATURE</a><span>July 22, 2015</span>
                        <a href="#">FASHION MODEL SHOOT</a><span>July 22, 2015</span>
                        <a href="#">GOLDEN SNOW LAND</a><span>July 22, 2015</span>
                    </div>    
                </div>
                <div className={style.recentNews}>
                    <div className={style.title}>POPULAR POSTS</div>
                    <a href="#">TOP 10 INGREDIENTS</a><span>July 22, 2015</span>
                    <a href="#">FAMILY COMES FIRST</a><span>July 22, 2015</span>
                    <a href="#">GOLDEN SNOW LAND</a><span>July 22, 2015</span>
                </div>
            </div>
            <div className={style.futerBar}>
                <div className={style.copyright}>@ Copyright Seily Blog</div>
                <div>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Futer
