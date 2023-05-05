import { StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import MyStyles from '../constants/MyStyles'
import { useState } from 'react'

const Indicator = (props) => {
  
  const [text, onChangeText] = React.useState(props.text)

  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:15}}> 
        <Text style={[MyStyles.text_md_grey, {width: '30%'}]}>{props.title}</Text>
        <TextInput 
          selectionColor={colors.pink}
          value={text}
          onChangeText={onChangeText}
          style={[styles.input, MyStyles.text_md]}
          editable={props.editable}
          selectTextOnFocus={props.selectTextOnFocus}
          numberOfLines={props.numberOfLines}
          maxLength={props.maxLength}
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