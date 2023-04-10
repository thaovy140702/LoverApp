import { StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import MyStyles from '../constants/MyStyles'

const Indicator = (props) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:15}}> 
        <Text style={[MyStyles.text_md_grey, {width: '30%'}]}>{props.title}</Text>
        <TextInput 
          placeholder={props.placeholder}
          selectionColor={colors.pink}
          value={props.text}
          // disableFullscreenUI={props.disableFullscreenUI}
          style={[styles.input, MyStyles.text_md]}
          
        />
    </View>
  )
}

export default Indicator

const styles = StyleSheet.create({
    input: {
        width: '70%',
        padding: 5,
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1,
    }
})