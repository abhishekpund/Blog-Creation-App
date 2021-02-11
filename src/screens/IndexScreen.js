import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons, Feather } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };

    }, [] );

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.viewStyle}>
                                <Text style={{ fontSize: 18 }}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <MaterialIcons name='delete' size={25}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
    };
};
const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopWidth: 1
    }
});

export default IndexScreen;