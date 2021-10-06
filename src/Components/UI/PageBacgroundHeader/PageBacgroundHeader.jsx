import React, { useState } from 'react'
import './PageBacgroundHeader.scss'

const NewsHeader = ({ children, imagePath, pageTitle }) => {

    const [scrolling, setScrolling] = useState(0)

    window.addEventListener('scroll', () => {
        setScrolling(window.scrollY / 380)
    })

    return (
        <div className="PageBacgroundHeader" style={{ backgroundImage: imagePath[1] }}>
            <img style={{ opacity: scrolling }} src={imagePath[0]} alt="" />
            <div className="PageBacgroundHeader-content">
                {children}
                <h1 className="NewsCategory">
                    {pageTitle[0]}
                </h1>
                <div>{pageTitle[1]}</div>
            </div>
        </div>
    )
}

export default NewsHeader