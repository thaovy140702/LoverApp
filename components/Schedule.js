import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import colors from '../constants/colors'

const Schedule = () => {
  return (
    <View style={{flex: 1, width: 350, marginTop: 20, borderRadius: 20}}>
      <Calendar 
        style={{
          borderColor: 'pink', 
          borderWidth: 1, 
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20, 
          backgroundColor: colors.lightPink}}
        theme={{
          calendarBackground: '#ffffff',
          textSectionTitleColor: 'white',
          selectedDayBackgroundColor: 'pink',
          selectedDayTextColor: 'white',
          todayTextColor: colors.pink,
          dayTextColor: 'black',
          monthTextColor: 'white',
          textMonthFontFamily: 'bold',
          textDayFontFamily: 'regular',
          textDisabledColor: colors.grey,
          arrowColor: 'white'
        }}
        markingType={'custom'}
        markedDates={{
          '2023-03-28': {customStyles:{container:{backgroundColor: colors.lightPink,elevation: 2}, text:{color: 'white'}}},
          '2023-03-29': {customStyles:{container:{backgroundColor: colors.lightPink,elevation: 2}, text:{color: 'white'}}},
          '2023-03-30': {customStyles:{container:{backgroundColor: colors.lightPink,elevation: 2}, text:{color: 'white'}}}
        }}/>
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({})