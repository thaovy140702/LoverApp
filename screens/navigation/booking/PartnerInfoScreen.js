import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../../components/button/BackButton'
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import MyStyles from '../../../constants/MyStyles'
import BoldText from '../../../components/text/BoldText'
import RegularText from "../../../components/text/RegularText";
import Rating from '../../../components/Rating'
import colors from '../../../constants/colors'
import HeartShape from '../../../components/HeartShape'
import usersData from '../data/usersData'
import { UserImageCircle } from "../../../components/UserImage";
import ButtonIcon from "../../../components/button/ButtonIcon";

const FeedbackItem = ({ name, rate, feedback }) => (
  <View style={[styles.card]}>
    <View style={{ marginLeft: 20, flexDirection: "row" }}>
      <UserImageCircle
        width={40}
        height={40}
        widthContainer={50}
        heightContainer={50}
        image="https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg"
      />

      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <BoldText text={name} font={14} />
        <Rating rate={rate} />
      </View>
    </View>

    <View style={{ marginStart: 80, marginTop: 10 }}>
      <RegularText text={feedback} fontSize={14} />
    </View>

    <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 20 }}>
      <Feather name="heart" size={20} color={colors.lightGrey} />
    </TouchableOpacity>
  </View>
);

const PartnerInfoScreen = () => {

  const {
    params :{
      partnerId,
      urlImg,
      partnerName,
      address,
      price,
      partnerHeigth,
      partnerWeigth,
      sex,
      age,
      rate,
      character,
      appearance,
      description
    }
  } = useRoute()

  return (
    <SafeAreaView style={{flex:1, paddingHorizontal: 20, backgroundColor: '#FFE3E3'}}>

      {/* header start */}
      <View style={styles.headerStyle}>
        <BackButton />
        <Feather name="heart" size={20} color="black" />
      </View>
      {/* header end */}

      <View style={{flex: .48}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={[MyStyles.text_xl,{marginEnd: 10}]}>{partnerName}</Text>
          <Rating rate={rate} />
        </View>
        <BoldText text={`$ ${price} /hour`} font={16} color={colors.pink} />
        <View style={{flexDirection:'row', alignItems:'center', marginTop: 10}}>
          <View style={styles.borderInfo}>
            <Text>{age}</Text>
            <MaterialCommunityIcons name={`gender-${sex}`} size={16} color={colors.darkPink} />
          </View>
          <View style={styles.borderInfo}>
            <Text>{partnerWeigth}</Text>
            <Text>kg</Text>
          </View>
          <View style={styles.borderInfo}>
            <Text>{partnerHeigth}</Text>
            <Text>cm</Text>
          </View>
        </View>

        <View style={{position:'absolute', end:0, bottom: 0}}>
          <HeartShape image={{uri: urlImg}} description={description} />
        </View>
      </View>

      <View style={{flex:.15, paddingTop: 5}}>
        <FlatList
          data={usersData}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemInfo}>
                <Text style={MyStyles.text_sm}>inverted</Text>
              </View>
            )}}
        />
      </View>

      <View style={{flex: .25, marginTop: 10}}>
        <FlatList
            horizontal
            data={usersData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FeedbackItem
              name={item.name}
              rate={item.rate}
              feedback={item.feedback}
              />
            )}
            keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{position: "absolute", bottom: 20, right: 10 }}>
        <ButtonIcon
          page='Booking'
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
    flex: .1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: 'red'
  },
  borderInfo: {
    width: 43, 
    height: 64, 
    backgroundColor: colors.pink_20, 
    borderRadius: 20, 
    alignItems:'center', 
    justifyContent:'center',
    marginEnd: 10,
    shadowColor: colors.pink_20,
    shadowOpacity: 20,
    elevation: 10,
    shadowOffset: {
        width: 0,
        height: 5
    }
  },
  itemInfo: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.pink_20,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 10,
    shadowColor: colors.pink_20,
    shadowOpacity: 20,
    elevation: 10,
    shadowOffset: {
        width: 1,
        height: 6
    }
  },
  card: {
    backgroundColor: 'rgba(255,255,255,.8)',
    height: 150,
    width: 320,
    borderRadius: 20,
    marginRight: 20,
    paddingVertical: 20
  }
})