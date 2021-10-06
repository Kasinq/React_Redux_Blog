import React from "react";
import "../PostComments.scss"

const AllComments = ({comments, setShowHide}) => {
    return (
        <div className="comments">
        <div className="allComments">
            {
                comments.map(comm =>
                    <div className="comment" key={comm.id}>
                        <img src="https://cdn.quotesgram.com/img/54/43/246061852-rust_sq-bbaf9ee9f99a9d4391c4979ca94a3fb4835a3b49.jpg" alt="" />
                        <div className="body">
                            <div className="email">{comm.email}</div>
                            <p className="text-comment">{comm.body}</p>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="showComments">
            <button onClick={() => setShowHide(true)}>
                <span>Hide</span>
                <img src="../images/-keyboard-arrow-up.svg" alt="" />
            </button>
        </div>
    </div>
    )
}

export default AllComments