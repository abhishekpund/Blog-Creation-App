import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPosts = state.find((blogPost) => blogPost.id === navigation.getParam('id') );

    return (
        <View>
            <Text>Title: {blogPosts.title}</Text>
            <Text>Content: {blogPosts.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
                <FontAwesome name='pencil' size={30}/>
            </TouchableOpacity>
        ),
    };
};
const styles = StyleSheet.create({});

export default ShowScreen;