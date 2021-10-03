import React, { useState } from "react";
import AuthorInfo from "../../Posts/AuthorInfo/AuthorInfo";
import MyModal from "../MyModal/MyModal";
import style from "../../Posts/AuthorInfo/AuthorInfo.module.css"

const IcoMenu = () => {

    const [modal, setModal] = useState(false)
    const myModal = () => {
        setModal(true)
    }

    return (<>
        <MyModal visible={modal} setVisible={setModal}>
            <div className={style.text}>
                <AuthorInfo />
            </div>
        </MyModal>
        <img  onClick={myModal} src="https://cdn-icons-png.flaticon.com/512/566/566020.png"  alt=""/>
    </>)
}

export default IcoMenu