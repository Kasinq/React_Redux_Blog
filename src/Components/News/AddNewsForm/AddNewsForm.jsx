import React from 'react'
import MyModal from '../../UI/MyModal/MyModal'
import style from './AddNewsForm.module.css'

const AddNewsForm = (props) => {

    return (<>
        <MyModal visible={props.modal} setVisible={props.setModal}>
            <form className={style.form}>
                <h3>Enter Title</h3>
                <input maxLength='80' value={props.title} onChange={(e) => props.setTitle(e.target.value)} type="text" placeholder="Enter title" />
                <h3>Enter Comment</h3>
                <textarea maxLength='260' value={props.body} onChange={(e) => props.setBody(e.target.value)} type="text" placeholder="Enter text" />
                <button className={style.btn}
                    onClick={props.addNew}>Add post</button>
            </form>
        </MyModal>
        <div className={style.inner}>
            <button className={style.addNew} onClick={() => props.setModal(true)} >
                ADD NEWS
            </button>
        </div>

    </>)
}
export default AddNewsForm