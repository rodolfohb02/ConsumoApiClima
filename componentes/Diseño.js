import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#3da1ff',
    },
    main:{
        marginTop:85,
    },
    fondB:{
        backgroundColor:'#d9efff',
        width:380,
        height:280,
        borderRadius:10,
        margin:10,
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    fondBC:{
        marginTop:5,
        marginLeft:10,
    },
    Lista1:{
        backgroundColor:'#d9efff',
        width:380,
        height:170,
        borderRadius:10,
        marginTop:29,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    Lista2:{
        backgroundColor:'#d9efff',
        width:380,
        height:170,
        borderRadius:10,
        marginTop:15,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    },
    texto1:{
        fontSize:30,
        marginTop:10
    },
    Card:{
        alignItems:'center',
        justifyContent:'center',
        margin:15,

        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    chora:{
        alignItems:'center',
        justifyContent:'center',
        margin:3,

        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    
    fondB2:{
        backgroundColor:'#d9efff',
        width:380,
        height:160,
        borderRadius:10,
        margin:20,

        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    fondBC2:{
        marginTop:10,
        marginLeft:10,
    },
    titulo: {
        fontSize: 36,
        marginBottom: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    
    img:{
        width:600,
        height:600,
        position: 'absolute',
        marginTop:-80,
    },
    textofondo:{
        fontSize:20,
        marginTop:10
    }
  });

export { styles };