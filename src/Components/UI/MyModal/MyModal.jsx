import React from 'react'
import './MyModal.scss'

const MyModal = ({children, visible, setVisible}) => {

    const root = ['myModal']
    if (visible) {
        root.push('active')
    }

    return (
        // join дає можливість додавати 2 класа (повертає строку з двома класами з'єднаних пробілом)
        <div onClick={() => setVisible(false)}  className={root.join(' ')}> 
            <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal