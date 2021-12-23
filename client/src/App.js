import React, { useEffect, useState } from 'react';
import Form from './components/forms/Form';
import Posts from './components/posts/posts';

import { useDispatch } from 'react-redux';
import { getPosts } from './_actions/posts';

function App () {
    const [id, setId] = useState('');
    const dispatch = useDispatch();
    // once that [dispatch] is changed, useEffect run.
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <>
            <Form id={id} setId={setId}/>
            <Posts setId={setId}/>
        </>
    )
}

export default App;