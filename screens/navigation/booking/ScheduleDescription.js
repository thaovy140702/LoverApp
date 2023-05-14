import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../../constants/colors';
import RegularText from '../../../components/text/RegularText'
import { Feather } from '@expo/vector-icons';
import BoldText from '../../../components/text/BoldText';
import { UserImageSquare } from '../../../components/UserImage';
import SmallButton from '../../../components/button/SmallButton'
import RectangleButton from '../../../components/button/RectangleButton';
import { CommonActions, useNavigation } from '@react-navigation/native';

const ScheduleDescription = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.descriptionCard, styles.shadowProp]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Feather name="calendar" size={24} color={colors.pink} />
          <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
            <Feather name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
       
        <BoldText text="12th May 2023" color={colors.pink} font={16}/>
        <RegularText text="10AM - 13PM" fontSize={13}/>

        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
          <UserImageSquare image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg" />
          <View style={{marginLeft: 20}}>
            <RegularText text="Partner name: " fontSize={13}/>
            <RegularText text="Gender: " fontSize={13}/>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <Feather name="map-pin" size={24} color={colors.grey} />
          <RegularText text=" Ho Chi Minh City" color={colors.grey} fontSize={13}/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Feather name="folder" size={16} color="black" />
          <View style={{marginLeft: 5}}>
           <RegularText text="File: " fontSize={13}/>
          </View>
          
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="dollar-sign" size={16} color="black" />
          <View style={{marginLeft: 5}}>
          <RegularText text="Fee: " fontSize={13}/>
          </View>
          <RegularText text=" 10.00" fontSize={14}/>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 25}}>
          <RectangleButton text="Cancel" color="#E5E4E3" backgroundColor="white" borderColor="#E5E4E3" />
          <RectangleButton text="Contact" color="white" backgroundColor={colors.pink} borderColor={colors.pink}/>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default ScheduleDescription

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 159, 159, 0.01)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionCard: {
    width: 335,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  shadowProp: {
    shadowColor: colors.pink,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10
  },
})