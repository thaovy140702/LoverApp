import { Dimensions } from "react-native";
import colors from "./colors";

const { width, height } = Dimensions.get("screen");

export default{
    container:{
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
    },
    headerSlide: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        // top: '15%',
        marginHorizontal: '5%',
        textAlign: 'center',
    },
    flexDirection: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    text_sm:{
        fontSize: 12,
        color: 'black',
        // fontFamily: 'regular'
    },
    text_md:{
        fontSize: 14,
        color: 'black',
        fontFamily: 'regular'
    },
    text_lg:{
        fontSize: 30,
        color: 'black',
        fontFamily: 'bold'
    },
    headerPage: {
        width, 
        height, 
        position:'absolute', 
        top:0, 
        backgroundColor: 'white'
    }
}