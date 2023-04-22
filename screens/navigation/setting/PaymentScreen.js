import { View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyStyles from '../../../constants/MyStyles';
import colors from '../../../constants/colors';
import usersData from '../data/usersData';
import { LinearGradient } from 'expo-linear-gradient';

const {width, height} = Dimensions.get('window')

const PaymentScreen = () => {
  return (
    <SafeAreaView style={{width,height, backgroundColor:'white'}}>
      <View style={{alignItems:'center', marginTop:'8%'}}>
        <Text style={MyStyles.text_lg}>$100.00</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={[styles.btn, {borderEndWidth: 1}]}>
            <MaterialCommunityIcons name="transfer-down" size={24} color='red' />
            <Text style={[MyStyles.text_md,{marginStart: 5,color:'red'}]}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {borderStartWidth: 1}]}>
            <MaterialCommunityIcons name="transfer-up" size={24} color="green" />
            <Text style={[MyStyles.text_md,{marginStart: 5,color:'green'}]}>Rechange</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingStart: 10, marginTop:'5%', flexDirection:'row'}}>
        <TouchableOpacity style={styles.cardPlus}>
          <MaterialCommunityIcons name="card-plus" size={24} color="pink" />
        </TouchableOpacity>
        {/* <View> */}
          <FlatList 
            horizontal
            data={usersData}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
              if(item.index == 1){
                const card = item.item.card
                return(
                    card.map((itemCard) => {
                      return(
                        <LinearGradient colors={[colors.lightPink,colors.pink,colors.darkPink]} 
                                        key={itemCard.id} style={styles.card}>
                          <TouchableOpacity>
                            <Text style={[MyStyles.text_xxl,{color:'white'}]}>{itemCard.bank}</Text>
                            <Text style={[MyStyles.text_xl,{color:'white', alignSelf:'center', paddingVertical:0}]}>{itemCard.numberCard}</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                              <View style={{paddingVertical:15}}>
                                <Text style={[MyStyles.text_sm_bold,{color:'white'}]}>Name</Text>
                                <Text style={[MyStyles.text_sm, {color:'white'}]}>{itemCard.name}</Text>
                              </View>
                              <View style={{paddingVertical: 15, alignItems:'flex-end'}}>
                                <Text style={[MyStyles.text_sm_bold,{color:'white'}]}>Valid date</Text>
                                <Text style={[MyStyles.text_sm,{color:'white'}]}>{itemCard.validDate}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </LinearGradient>
                      )
                    })
                  
                )
              }
            }}
          />
        {/* </View> */}
      </View>
      
      <View style={{marginTop:'8%'}}>
        <Text style={[MyStyles.text_sm_grey,{alignSelf: 'center'}]}>--- HISTORY ---</Text>
        <ScrollView style={{marginTop:'8%'}}>
          <TouchableOpacity style={styles.history}>
            <View>
              <Text style={MyStyles.text_xl}>Payment success</Text>
              <Text style={MyStyles.text_sm}>Accept an appointment with Anna</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
              <Text style={[MyStyles.text_md,{color:'red'}]}>- $20.00</Text>
              <Text style={MyStyles.text_sm}>20/03/2023</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    paddingHorizontal: 25,
    marginVertical: 10,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  cardPlus:{
    backgroundColor:'white',
    width:60,
    height: 150,
    margin:10,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 1,
      height:4
    },
    shadowRadius: 10,
    elevation:10
  },
  card:{
    width: 230,
    height: 150, 
    margin: 10,
    padding: 10,
    borderRadius:10,
    shadowColor: 'rgba(0, 0, 0, 0.25)', 
    shadowOffset: {
      width: 1,
      height:4
    },
    shadowRadius: 10,
    elevation:10
  },
  history:{
    backgroundColor:'white',
    padding: 12,
    flexDirection:'row',
    borderRadius: 10,
    justifyContent:'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 1,
      height:2
    },
    shadowRadius: 10,
    elevation:10,
    marginHorizontal:20, 
    marginBottom: 20
  }
});