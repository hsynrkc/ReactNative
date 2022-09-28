import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles'

const Header = props => {
    const counterTodo = props.item.filter(item => !item.iscompleted);
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Yapılacaklar </Text>
                <Text style={styles.sayac}>{counterTodo.length}</Text> 
        </View>
    )
}
export default Header;