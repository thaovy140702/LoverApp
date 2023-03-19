import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'


const UserImage = props => {
  return (
    <View style={[styles.imageContainer, {width: props.widthContainer, height: props.heightContainer}]}>
        <Image source={{ uri: props.image }} 
        style={[
          styles.userImage, 
          {height: props.height, width: props.width}
          ]} />
      </View>
  )
}

export default UserImage

const styles = StyleSheet.create({
  userImage: {
    borderRadius: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(255, 159, 159, 0.2)',
    borderRadius: 50,
    overlayColor: "40%",
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 20,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  // shadow1: {
  //   shadowColor: colors.grey,
  //   shadowOffset: {
  //     width: 0,
  //     height: 4
  //   },
  //   shadowRadius: 20,
  //   shadowOpacity: 0.25,
  //   elevation: 3,
  // },
  // shadow2: {
  //   shadowProp: {
  //     shadowColor: '#171717',
  //     shadowOffset: {width: 0, height: 4},
  //     shadowOpacity: 0.2,
  //     shadowRadius: 3
  //   },
  //   elevation: 10
  // }
})