import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Footer from './components/Footer';


function App() {
    
    return(
        <SafeAreaView style={styles.container}>
            <Footer />
        </SafeAreaView>
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
});