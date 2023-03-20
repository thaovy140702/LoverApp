import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RegularText from '../../../components/text/RegularText'
import colors from '../../../constants/colors'
import BoldText from '../../../components/text/BoldText'
import { Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ChatListScreen from './ChatListScreen'
import Bubble from '../../../components/Bubble'
import { NavigationContainer } from '@react-navigation/native';
import Input from '../../../components/Input'
import BackButton from '../../../components/button/BackButton'

const chatData =[
 
]

const message = "Hi Darling, Have a nice day "
const ChatScreen = () => {

  const navigation = useNavigation();

  const ButtonItem = ({iconName}) => (
    <View style={styles.buttonContainer}>
      <FontAwesome5 name={iconName} size={14} color="white" />
    </View>
  ) 

  return (
      <SafeAreaView style={{flex: 1}}>

{/* header start*/}
        <View style={styles.headerStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <View style={{marginTop: 10}}>
          <BackButton />
          </View>
           

            <View style={{marginTop: 15}}>
              <RegularText text="You have an appointment with Lis at 8:00AM" fontSize={12} color="#8A8A8E"/>
            </View>

          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={{uri: "https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"}} style={styles.imageUser}/>
            <View 
              style={{
                flexDirection: 'column',
                marginHorizontal: 10, 
                justifyContent: 'center'}}>
              <BoldText text="Lis" color={colors.textColorBlack} fontSize={16}/>

              <View style={{flexDirection: 'row'}}>
                <Feather name="map-pin" size={16} color="#8A8A8E" />
                <RegularText text=" Ho Chi Minh City" color="#8A8A8E" fontSize={12}/>
              </View>
            </View>

            <ButtonItem iconName="map-marker-alt"/>
            <ButtonItem iconName="phone-alt"/>
            <ButtonItem iconName="video"/>
          </View>

        </View>
{/* header end */}

{/* message start */}
        <View style={{flex: 1}}>
          <Bubble message={message} time="6:00 AM"/>
        </View>
    
{/* message end */}

      <View style={styles.textInputMessage}>
        <TouchableOpacity>
          <Feather name="camera" size={20} color="black" style={{marginTop: 20}}/>
        </TouchableOpacity>
        
        <Input 
          placeHolder="Enter your message" 
          borderColor={colors.lightPink}
          // value={value}
          onInputChanged={ () => {} } />
      
        <TouchableOpacity>
          <Feather name="smile" size={20} color="black" style={{position: 'absolute', marginStart: -35}}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <FontAwesome name="send" size={20} color={colors.pink} style={{marginTop: 20}}/>
        </TouchableOpacity>
        
        </View>
      </SafeAreaView>
      
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 159, 159, 0.2)',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  
  imageUser: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,159,159,0.6)',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 5,
    width: 26, 
    height: 26,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'red',
    shadowOffset: {width: -1, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 8
  },
  textInputMessage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: colors.pink,
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 3,
  }
})