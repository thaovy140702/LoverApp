import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpForm from './SignUpForm'

const AuthScreen = props => {
  return <SafeAreaView style={{flex: 1}}>
    <SignUpForm />
  </SafeAreaView>
}

export default AuthScreen

const styles = StyleSheet.create({})