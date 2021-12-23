
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post';

function Posts ({setId}) {
    const posts = useSelector( state => state.posts);
    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <Post key={post._id} setId={setId} id={post._id} author={post.author} title={post.title} article={post.article} createdAt={post.createdAt}/>
                    );
                })
            }
        </>
    );
}

export default Posts;