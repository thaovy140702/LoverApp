import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegularText from '../text/RegularText'
import colors from '../../constants/colors'


const Item = props => (
  <View style={{
    backgroundColor: props.backgroundColor,
    width: 90,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: props.shadowColor,
    shadowOffset: {width: -12, height: 8},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 8
  }}>
    <RegularText text={props.title} color={props.color} fontSize={12}/>
  </View>
)

const ComingButton = () => {
  return (
    <Item 
      title="Coming"
      color={colors.textColorBlack}
      backgroundColor="#E5E4E3"
      shadowColor="black"
    />
  )
}

const FinishButton = () => {
  return (
    <Item 
      title="Coming"
      color={colors.textColorBlack}
      backgroundColor="#E5E4E3"
      shadowColor="black"
    />
  )
}

export {ComingButton, FinishButton}
const styles = StyleSheet.create({
  buttonStyle: {
  }
})