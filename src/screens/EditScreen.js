import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from './components/BlogPostForm';


const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPosts = state.find((blogPost) => blogPost.id === id );

    return (
            <BlogPostForm 
                initialValues={{ title: blogPosts.title, content: blogPosts.content}}
                onSubmit={(title, content) => {
                    editBlogPost( title, content, id, () => navigation.pop() );
                }}
            />
    );
};

const styles= StyleSheet.create({});


export default EditScreen;