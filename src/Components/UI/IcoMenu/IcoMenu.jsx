import React, { useState } from "react";
import AuthorInfo from "../../Posts/AuthorInfo/AuthorInfo";
import MyModal from "../MyModal/MyModal";

const IcoMenu = () => {

    const [modal, setModal] = useState(false)
    const myModal = () => {
        setModal(true)
    }

    return (<>
        <MyModal visible={modal} setVisible={setModal}>
            <AuthorInfo />
        </MyModal>
        <img width="28px" onClick={myModal} src="https://cdn-icons-png.flaticon.com/512/566/566020.png" alt="" />
    </>)
}

export default IcoMenu