import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import ProductsCard from './components/ProductCard'

import products_data from './product_data.json'

function App(){
    const renderProducts = ({item}) => <ProductsCard product={item} />
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>PATIKASTORE</Text>
            
            <FlatList 
            ListHeaderComponent={() => ( 
                <TextInput style={styles.input} 
                    placeholder="Ara ..."/> ) } 
                    data={products_data} 
                    renderItem={renderProducts} 
                    numColumns={2} 
                    horizontal={false} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:50,
        color:'purple',
        margin:10,
    },
    input:{
        backgroundColor:'lightgrey',
        borderRadius:20,
        fontSize:25,
        margin: 10,
        padding: 20,
    }
})
export default App;