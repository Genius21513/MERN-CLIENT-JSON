import axios from 'axios';

// const url = 'http://localhost:5000/posts';
import posts from '../_data/posts.json';

export const getPosts = () => { return { data : posts } };

export const createPost = (post) => { post.createdAt = '2021-12-22'; post._id = Date.now();return { data: post} };

export const deletePost = (id) => { return {} ; }

export const updatePost = (id, post) => { return { data : post } };