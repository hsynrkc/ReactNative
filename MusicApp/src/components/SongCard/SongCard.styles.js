import { Row } from 'react-bootstrap';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
    },
    image:{ 
        height:100,
        width:100,
        borderRadius:50,
    },
    inner_container:{
        padding:10,
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        color:'black',
        fontSize:25,
    },
    info_container:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        
    },
    year:{
        marginLeft: 10,
        fontWeight:'bold',
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
        padding:5,
    },
    soldout_title:{
        color:'red',
        fontSize:12,
    },
    content_container:{
        flexDirection:'row',

    }
})