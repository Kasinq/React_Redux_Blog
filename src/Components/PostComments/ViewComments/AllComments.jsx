import React from "react";
import style from "../PostComments.module.css"

const AllComments = ({comments, setShowHide}) => {
    return (
        <div className={style.comments}>
        <div className={style.allComments}>
            {
                comments.map(comm =>
                    <div className={style.comment} key={comm.id}>
                        <img src="https://cdn.quotesgram.com/img/54/43/246061852-rust_sq-bbaf9ee9f99a9d4391c4979ca94a3fb4835a3b49.jpg" alt="" />
                        <div className={style.body}>
                            <div className={style.email}>{comm.email}</div>
                            <p className={style.text}>{comm.body}</p>
                        </div>
                    </div>
                )
            }
        </div>
        <div className={style.showComments}>
            <button onClick={() => setShowHide(true)}>
                <span>Hide</span>
                <img src="../images/-keyboard-arrow-up.svg" alt="" />
            </button>
        </div>
    </div>
    )
}

export default AllComments