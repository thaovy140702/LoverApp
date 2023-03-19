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
        < View style={styles.theirMessageStyle}>
            <RegularText text={message} color={colors.textColorBlack} fontSize={13} />
        </View>
            
        <View style={{marginStart: 24}}>
            <RegularText text={time} color={colors.grey} fontSize={13}/>
        </View>
    </View>
  )
}

export default Bubble

const styles = StyleSheet.create({
    wrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 5,
        marginBottom: 10,
        borderColor: '#E2DACC',
        borderWidth: 1
    },
    messageStyle: {
        backgroundColor: colors.lightPink,
        marginStart: 24,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 235,
        padding: 10
    },
    theirMessageStyle: {
        position: 'absolute',
        maxWidth: 300,
        backgroundColor: 'rgba(207,159,255,0.1)',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignSelf: 'flex-end'
    }
})