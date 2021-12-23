import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../_actions/posts.js';

function Post({ id, author, title, article, createdAt, setId }) {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h1>{author}</h1>
                <h3>{title}</h3>
                <h3>{article}</h3>
                <h3>{createdAt}</h3>
                <button onClick={() => setId(id)}>update</button>
                <button onClick={() => { dispatch(deletePost(id))}}>delete</button>
            </div>
        </>
    );
}

export default Post;