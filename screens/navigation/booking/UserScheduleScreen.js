import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import BoldText from '../../../components/text/BoldText';
import colors from '../../../constants/colors';
import RegularText from '../../../components/text/RegularText';
import { useNavigation } from '@react-navigation/native';
import { UserImageSquare } from '../../../components/UserImage';
import { CanceledButton } from '../../../components/button/TinyButton';

const UserScheduleScreen = () => {

  const dt = new Date()

  const navigation = useNavigation()
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState(String(dt.getMonth()) + ' / ' + String(dt.getFullYear()))

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    // let fTime = 'Hours: ' + tempDate.getHours() + 'Minutes: ' + tempDate.getMinutes()
    setText(fDate)
  }
  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  
  return (

    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Button title='Pick date' onPress={() => showMode('date')}/>
      <Button title='Pick time' onPress={() => showMode('time')}/> */}
      {
        show && (
          <DateTimePicker
          
          testID='dateTimePicker'
          locale={"en"}
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange} />
        )
      }

{/* header start */}
     <View style={styles.headerStyle}>
        <View style={{marginStart: 20}}>
          <View style={{flexDirection: 'row', width: 100, justifyContent: 'space-around'}}>
          <BoldText text={text} font={16}/>
          <TouchableOpacity onPress={ () =>  showMode('date')}>
            <Feather name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}> 
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
         
      </View>
{/* header and */}

{/* User appointment start*/}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.calendarStyle}>
          <BoldText text="12" color={colors.pink} font={20}/>
          <RegularText text = "May" color={colors.pink} font={16}/>
        </View>

        <View style={{flexDirection: 'row', width: 180, justifyContent: 'space-between', marginLeft: 20}}>
         <UserImageSquare image='https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg'/>

         <View>
          <RegularText text="10AM - 13PM" fontSize={12}/>
          <TouchableOpacity onPress={() => navigation.navigate("ScheduleDescription")}>
            <BoldText text="Description" font={14}/>
          </TouchableOpacity>
          
          <View style={{marginTop: 2}}>
            {/* <ComingButton /> */}
            <CanceledButton />
          </View>
          
         </View>
        </View>
      </View>


    </SafeAreaView>
  )
}

export default UserScheduleScreen

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingEnd: 30,
    alignItems: 'center',
    paddingVertical: 20
  },
  calendarStyle: {
    width: 67,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#FFE8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20
  }
})