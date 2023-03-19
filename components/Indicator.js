import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import MyStyles from '../constants/MyStyles'

const Indicator = (props,title) => {
  return (
    <View style={{flexDirection:'row'}}> 
        <Text style={MyStyles.text_sm_grey}>{title}</Text>
        <View style={styles.Indicator} />
    </View>
  )
}

export default Indicator

const styles = StyleSheet.create({
    Indicator: {
        width: 100,
        marginVertical: 20,
        marginHorizontal: 15,
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1,
    }
})