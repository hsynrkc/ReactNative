import React, { useState } from 'react';
import {TextInput, TouchableOpacity, View, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import styles from './Footer.styles'
import Header from '../Header'

const Footer = () => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    const handleAdd = () => {
        if(text === ''){
            return Alert.alert('Ekleme yapmadınız.');
        }
        if (text.trim()) {
            const newTodo = {
                id: Math.floor(Math.random() * 1000),
                title: text,
                iscompleted: false,
            };
            setTodo([...todo, newTodo]);
            setText('');
        }
    };

    const toggleTodo = id => {
        const newTodo = todo.map(item => {
            if (item.id === id){
                item.iscompleted = !item.iscompleted
            }
            return item;
        })
        setTodo(newTodo);
    }

    const removeTodo = id => {
        const newTodo = todo.filter(item => item.id !== id);
        setTodo(newTodo);
    };

    const handleChange = item => setText(item);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header item={todo}/>
                {todo.map(item => (
                    <View
                        style={{
                            backgroundColor: item.iscompleted ? 'grey' : 'green',
                            margin: 10,
                            padding: 10,
                            borderRadius: 10,
                        }}
                        key={item.id}>
                            
                        <Text
                            onLongPress={() => removeTodo(item.id)}
                            onPress={() => toggleTodo(item.id)}
                            style={{
                                color: 'white',
                                textDecorationLine: item.iscompleted ? 'line-through' : 'none',
                                fontSize: 30,
                                }}
                            key={item.id}>
                            {item.title}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.footer_container}>
                
                <TextInput 
                    placeholder="Yapılacak.."
                    onChangeText={handleChange} 
                    style={{borderBottomWidth:1, borderColor:'darkblue', fontSize:20}} 
                    value={text}/>
                    
                <TouchableOpacity 
                    style={{backgroundColor: text ? 'yellow' : 'grey',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:10,
                            margin:10,
                            padding:10,}} 
                    onPress={handleAdd}>
                    <Text style={styles.title}>Kaydet</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
    )
}
export default Footer;


