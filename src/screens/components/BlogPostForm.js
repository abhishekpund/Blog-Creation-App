import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [ title, setTitle ] = useState(initialValues.title);
    const [ content, setContent ] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.titleStyle}>Enter Title:</Text>
            <TextInput 
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.contentStyle}
            />

            <Text style={styles.titleStyle}>Enter Content:</Text>
            <TextInput 
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.contentStyle}
            />

            <Button 
                title='Add Blog Post'
                onPress={() => onSubmit(title,content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        paddingLeft: 5
    },
    contentStyle: {
        fontSize: 18,
        borderWidth: 1,
        margin: 5,
        marginBottom: 5,
        padding: 5
    }
});

export default BlogPostForm;