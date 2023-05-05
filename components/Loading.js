import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={colors.pink}/>
  </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
})