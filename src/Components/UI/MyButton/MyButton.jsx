import React from 'react'
import style from './MyButton.module.css'

const MyButton = ({value}) => {
    return (
        <button className={style.myBtn}>
            {value}
        </button>
    )
}

export default MyButton