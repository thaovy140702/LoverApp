import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import BackButton from '../../components/button/BackButton'
import { Feather } from '@expo/vector-icons';
import BoldText from '../../components/text/BoldText'
import Info from '../../components/Info';
import UserImage from '../../components/UserImage';
import Rating from '../../components/Rating';
import RegularText from '../../components/text/RegularText';
import colors from '../../constants/colors';
import LightText from '../../components/text/LightText';
import Input from '../../components/Input';
import usersData from './data/usersData';
import Map from '../../components/Map';
import Schedule from '../../components/Schedule';
import SmallButton from '../../components/button/SmallButton'
import ButtonIcon from '../../components/button/ButtonIcon';


const PartnerInfoScreen = () => {
  

  const ItemInfo = ({text}) => (
    <View style={styles.itemInfo}>
      <RegularText text={text} color={colors.textColorWhite} fontSize={12}/>
    </View>
  )
  return (
    <SafeAreaView>

      <ScrollView styles={{flex: 1}}>
      

        {/* header start */}
      <View style={styles.headerStyle}>
        <View style={{marginStart: 20}}>
          <BackButton/>
        </View>
          
          <Feather name="heart" size={24} color="black" />
      </View>
      {/* header end */}


      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Info type="Weight" value="47"/>
        <UserImage width={70} height={70} widthContainer={80} heightContainer={80}
          image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"/>
        <Info type="Height" value="160" />
      </View>

      <View style={{alignItems: 'center'}}>
        <BoldText text="Lisa" font={16}/>
        <View style={{flexDirection: 'row'}}>
          <Rating rate={4} />
          <RegularText text=" 219 receivers" color={colors.grey}/>
        </View>
        <BoldText text={`$ 10.00 /hour`} font={16} color={colors.pink}/>
      </View>

      <View style={{paddingStart: 20, marginTop: 20}}>
        <BoldText text="Details" font={16}/>
        <View style={{marginTop: 20}}>
          <LightText text="I am Lisa, 25 years old now and I think you ..., " fontSize={14}/>
        </View>
      
       {/* Flatlist here */}


       <FlatList
        style={{marginTop: 10}}
        data={usersData}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={ ({item}) => {
          
          return (
            <ItemInfo text="Interesting"/>
          )
        }
        }>

       </FlatList>
      </View>

      <View style={{paddingStart: 20, marginTop: 20}}>
        <BoldText text="Schedule" font={16}/>
        <Schedule />
      </View>


      <View style={{paddingStart: 20, marginTop: 20}}>
        <BoldText text="Choose time" font={16}/>
        
        <View>
        </View>

        <View>
          
        </View>

      </View>

      <View style={{paddingStart: 20, marginTop: 20}}>
        <BoldText text="Location" font={16}/>
        <Map />
      </View>

      <View style={{paddingStart: 20, marginTop: 20}}>
        <BoldText text="Reviewer" font={16}/>


{/* user comment */}

        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 20, marginRight: 10}}>
            <UserImage width={40} height={40} widthContainer={40} heightContainer={40} image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"/>
          </View>
          <Input  
            placeholder="Enter your comment"
            backgroundColor='rgba(255,159,159,0.1)'
            borderColor='rgba(255,159,159,0.1)'/>
        </View>

        <View style={styles.commentStyle}>
          <View style={{marginRight: 10}}>
            <UserImage width={40} height={40} widthContainer={40} heightContainer={40} image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"/>
          </View>
            <RegularText text="You are so hot :>>>"/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 80, width: 50}}>
            <Feather name="heart" size={20} color={colors.grey} />
            <Feather name="trash-2" size={20} color={colors.grey} />
          </View>
        </View>
      </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 60, right: 10}}>
            <ButtonIcon
              text="Appointment"
              backgroundColor={colors.pink}
              color={colors.textColorWhite}
            />
        </View>
    </SafeAreaView>
  )
}

export default PartnerInfoScreen

const styles = StyleSheet.create({
    headerStyle: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      paddingEnd: 30,
      alignItems: 'center',
      paddingVertical: 35
    },
    itemInfo: {
      width: 130,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.lightPink,
      borderRadius: 20,
      marginRight: 10
    },
    commentStyle: {
      flexDirection: 'row', 
      backgroundColor: 'white',
      width: 330,
      alignItems: 'center', 
      marginStart: 10, 
      marginTop: 10, 
      marginBottom: 20,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 15,
      shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }
})