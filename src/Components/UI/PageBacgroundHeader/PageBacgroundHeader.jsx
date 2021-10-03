import React, { useState } from 'react'
import style from './PageBacgroundHeader.module.css'

const NewsHeader = ({ children, imagePath, pageTitle }) => {

    const [scrolling, setScrolling] = useState(0)

    window.addEventListener('scroll', () => {
        setScrolling(window.scrollY / 380)
    })

    return (
        <div className={style.header} style={{ backgroundImage: imagePath[1] }}>
            <img style={{ opacity: scrolling }} src={imagePath[0]} alt="" />
            <div className={style.content}>
                {children}
                <h1 className={style.title}>
                    {pageTitle[0]}
                </h1>
                <div>{pageTitle[1]}</div>
            </div>
        </div>
    )
}

export default NewsHeader