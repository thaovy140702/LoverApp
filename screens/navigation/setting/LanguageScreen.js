import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import MyStyles from '../../../constants/MyStyles';

const LanguageScreen = () => {
  return (
    <SafeAreaView style={{flex: 1,padding: 20, backgroundColor:'white'}}>
      <TouchableOpacity style={styles.border}>
        <Text style={MyStyles.text_md}>Vietnamese</Text>
        <Feather name="check" size={24} color="pink" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.border}>
        <Text style={MyStyles.text_md}>English</Text>
        <Feather name="check" size={24} color="pink" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LanguageScreen
 const styles = StyleSheet.create({
  border: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.25)', 
    shadowOffset:{
      width: 0,
      height: 3
    },
    elevation: 10,
    shadowRadius: 10
  }
 })