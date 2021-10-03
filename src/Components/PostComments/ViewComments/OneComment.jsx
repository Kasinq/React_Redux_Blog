import React from "react";
import style from "../PostComments.module.css"

const OneComment = ({comments, setShowHide}) => {
    return (
        <div className={style.comments}>
            {
                comments.map((comm, i) => {
                    if (i === comments.length - 1) {
                        return <div className={style.comment} key={comm.id}>
                            <img src="https://cdn.quotesgram.com/img/54/43/246061852-rust_sq-bbaf9ee9f99a9d4391c4979ca94a3fb4835a3b49.jpg" alt="" />
                            <div className={style.body}>
                                <div className={style.email}>{comm.email}</div>
                                <p className={style.text}>{comm.body}</p>
                            </div>
                        </div>
                    }
                }
                )
            }
            <div className={style.showComments}>
                <button onClick={() => setShowHide(false)}>
                    <span>Show All</span>
                    <img src="../images/-keyboard-arrow-down.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default OneComment