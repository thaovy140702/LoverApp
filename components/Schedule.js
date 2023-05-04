import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import colors from '../constants/colors'
import { useState } from 'react'

const Schedule = () => {
  
  const [selected, setSelected] = useState('');
  return (
    <View style={{flex: 1, width: 320, marginTop: 20, borderRadius: 20}}>
      <Calendar 
        style={{
          borderRadius: 10,
          backgroundColor: colors.lightPink,
          padding:10
        }}
        theme={{
          // calendarBackground: '#ffffff',
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
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true}
        }}
        
      />
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({})