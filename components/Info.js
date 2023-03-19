import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegularText from './text/RegularText'
import colors from '../constants/colors'


// component for weight, height, gender, ...

const Info = props => {
  return (
    <View style={{flexDirection: 'column', width: 80, alignItems: 'center'}}>
        <RegularText text={props.type} color={colors.pink} fontSize={14}/>


        {
            props.type === "Weight" ? <RegularText text={props.value + ` kg`} fontSize={14}/>
            : props.type === "Height" ? <RegularText text={props.value + ' cm'} fontSize={14}/>
            : <RegularText text={props.value} fontSize={14}/>
        }
        
    </View>
  )
}

export default Info

const styles = StyleSheet.create({})