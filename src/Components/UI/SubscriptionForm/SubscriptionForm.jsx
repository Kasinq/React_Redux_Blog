import React from 'react'
import style from './SubscriptionForm.module.css'

const SubscriptionForm = () => {
    return (
        <form>
            <div className={style.title}>SUBSCRIBE TO MY NEWSLETTER</div>
            <div className={style.inner}>
                <input className={style.inp} type="text" placeholder="Your email address" />
                <button className={style.button}>SUBSCRIBE</button>
            </div>
        </form>
    )
}

export default SubscriptionForm