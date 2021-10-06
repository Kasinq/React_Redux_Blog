import React from "react";
import "../PostComments.scss"

const OneComment = ({comments, setShowHide}) => {
    return (
        <div className="comments">
            {
                comments.map((comm, i) => {
                    if (i === comments.length - 1) {
                        return <div className="comment" key={comm.id}>
                            <img src="https://cdn.quotesgram.com/img/54/43/246061852-rust_sq-bbaf9ee9f99a9d4391c4979ca94a3fb4835a3b49.jpg" alt="" />
                            <div className="body">
                                <div className="email">{comm.email}</div>
                                <p className="text-comment">{comm.body}</p>
                            </div>
                        </div>
                    }
                }
                )
            }
            <div className="showComments">
                <button onClick={() => setShowHide(false)}>
                    <span>Show All</span>
                    <img src="../images/-keyboard-arrow-down.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default OneComment