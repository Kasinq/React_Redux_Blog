import React, { useState } from "react";
import SubscriptionForm from "../../UI/SubscriptionForm/SubscriptionForm";
import style from "./AuthorInfo.module.css"

const AuthorInfo = () => {

    // профіль описання 
    const [profileDescription, setProfileDescription] = useState('Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.')

    return (
        <div className={style.info}>
            <div className={style.inner}>
                <div>ABOUT ME</div>
                <img className={style.avatar} src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg" alt="" />
                <p className={style.textDescription}>{profileDescription}</p>
                <div className={style.signature}>
                    <img className={style.sign} src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/signature.png" alt="" />
                </div>
            </div>
            <div className={style.subscription}>
                <SubscriptionForm />
            </div>
            <div className={style.inner}>
                <div>FOLLOW ME ON</div>
                <div className={style.social}>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/49/49052.png" alt="Facebook" title="Facebook" /></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/48/48898.png" alt="Instagram" title="Instagram" /></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/48/48899.png" alt="Pinterest" title="Pinterest" /></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/49/49043.png" alt="Twiter" title="Twiter" /></a>
                </div>
            </div>
        </div>
    )
}

export default AuthorInfo