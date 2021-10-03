import React from 'react'
import style from './Preloader.module.css'

const Preloader = () => {
    return <div className={style.spinner}><img src='./images/Spinner-1s-200px.svg' alt='Идет загрузка' /></div>
}

export default Preloader