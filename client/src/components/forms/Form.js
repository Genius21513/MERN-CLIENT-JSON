import react , { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../_actions/posts';

function Form({id, setId}){
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, setValue } = useForm();
    const post = useSelector(state => state.posts.find(post => ( post._id === id )? post: null));
    
    const onSubmit = (data) => {
        if (data.title == '') return;
        if (id === '') {
            dispatch(createPost(data));
            reset();
        } else {
            dispatch(updatePost(id, data));
            reset();
            setId('');
        }
    }

    useEffect(() => {
        if (id !== '') {
            let keys = Object.keys(post);
            keys.forEach(key => setValue(key, post[key]));
        }
    }, [id])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='author' {...register('author')}/>
                <br/><br/>
                <input type='text' name='article' {...register('article')}/>
                <br/><br/>
                <input type='text' name='title' {...register('title')}/>
                <br/><br/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form;