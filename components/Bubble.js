import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../constants/colors";
import RegularText from '../components/text/RegularText'

    

const Bubble = ({message, time}) => {
    // const enabledBgColor = props.color || colors.pink;
    // const disabledBgColor = colors.lightGrey;
    // const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

  return (
    <View style={{flex: 1}}>
        < View style={[styles.messageStyle,{ maxWidth: 230, padding: 15}]}>
            <RegularText text={message} color='white' fontSize={13} />
        </View>
            
        <View style={{marginTop: 5, alignItems:'flex-start'}}>
            <RegularText text={time} color={colors.grey} fontSize={13}/>
        </View>
    </View>
  )
}

export default Bubble

const styles = StyleSheet.create({
    // wrapperStyle: {
    //     flexDirection: 'row',
    //     justifyContent: 'center'
    // },
    // container: {
    //     backgroundColor: 'white',
    //     borderRadius: 6,
    //     padding: 5,
    //     marginBottom: 10,
    //     borderColor: '#E2DACC',
    //     borderWidth: 1
    // },
    messageStyle: {
        backgroundColor: colors.lightPink,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignSelf:'flex-start'
    },
    theirMessageStyle: {
        backgroundColor: 'rgba(207,159,255,0.1)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        alignSelf: 'flex-end'
    }
})