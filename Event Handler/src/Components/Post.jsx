import React from 'react';
import './post.css';

const Post = ({ title, body }) => {
    return <>
        <div className="post btn btn-glow btn-gradient">
            <h1 style={{ fontSize: "45px" }}>{title}</h1>
            <h3>{body}</h3>
        </div>
    </>
}

export default Post