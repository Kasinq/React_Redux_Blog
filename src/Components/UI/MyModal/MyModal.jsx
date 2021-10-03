import React from 'react'
import style from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const root = [style.myModal]
    if (visible) {
        root.push(style.active)
    }

    return (
        // join дає можливість додавати 2 класа (повертає строку з двома класами з'єднаних пробілом)
        <div onClick={() => setVisible(false)}  className={root.join(' ')}> 
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal