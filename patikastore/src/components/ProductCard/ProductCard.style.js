import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgrey',
        borderRadius:10,
        margin:15,
    },
    image:{
        height: Dimensions.get('window').height / 3,
        margin:20,
        borderRadius:10,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        paddingLeft:10,
    },
    price:{
        fontSize:20,
        marginTop:5,
        paddingLeft:10,
    },
    stock:{
        color:'red',
        fontSize:20,
        marginTop:5,
        paddingLeft:10,
    },
})