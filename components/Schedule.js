import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import colors from '../constants/colors';

const Schedule = () => {
  const [selected, setSelected] = useState({ fromDate: '', toDate: '', dataError: '' });

  const handleDayPress = (day) => {
    const { fromDate, toDate } = selected;
    if (fromDate && toDate) {
      setSelected({ fromDate: day.dateString, toDate: '', dataError: '' });
    } else if (fromDate && day.dateString < fromDate) {
      setSelected({ fromDate: day.dateString, toDate: fromDate, dataError: '' });
    } else {
      setSelected({ ...selected, [fromDate ? 'toDate' : 'fromDate']: day.dateString });
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          textSectionTitleColor: 'white',
          selectedDayBackgroundColor: 'pink',
          selectedDayTextColor: 'white',
          todayTextColor: colors.pink,
          dayTextColor: 'black',
          monthTextColor: 'white',
          textMonthFontFamily: 'bold',
          textDayFontFamily: 'regular',
          textDisabledColor: colors.grey,
          arrowColor: 'white',
        }}
        markingType="period"
        onDayPress={handleDayPress}
        markedDates={{
          [selected.fromDate]: { startingDay: true, endingDay: !selected.toDate, color: 'pink' },
          [selected.toDate]: { startingDay: !selected.fromDate, endingDay: true, color: 'pink' },
          ...((selected.fromDate && selected.toDate) && { [selected]: { startingDay: true, endingDay: true, color: 'pink' } }),
        }}
        hideExtraDays={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 320,
    marginTop: 20,
    borderRadius: 20,
  },
  calendar: {
    borderRadius: 10,
    backgroundColor: colors.lightPink,
    padding: 10,
  },
});

export default Schedule;
