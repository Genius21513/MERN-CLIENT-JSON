import * as api from '../api/posts';

export const getPosts = () => async (dispatch) => {
    const { data } = await api.getPosts();
    dispatch({ type: 'GET', payload: data });
}

export const createPost = (post) => async (dispatch) => {
    const { data } = await api.createPost(post);
    dispatch({ type: 'POST', payload: data });
}

export const deletePost = (id) => async (dispatch) => {
    await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: id });
}

export const updatePost = (id, post) => async (dispatch) => {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: 'UPDATE', payload: data });
}