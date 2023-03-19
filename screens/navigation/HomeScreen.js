import { View, Text, Dimensions, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import usersData from './data/usersData'
import newsData from './data/newsData'
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../../constants/colors';
import MyStyles from '../../constants/MyStyles';

const {width, height} = Dimensions.get('window')

const HomeScreen = () => {
  return (
    <SafeAreaView style={{width, height, backgroundColor:'#f7f7f7'}}>
      <View style={{flex:1}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{paddingHorizontal: 20}}>
          {/* top  */}
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:'8%'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/images/userimage.jpg')} style={styles.image}/>
              <View style={{marginStart: '8%'}}>
                <Text style={MyStyles.text_md_bold}>Hi Lis,</Text>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <SimpleLineIcons style={{start:-2}} name="location-pin" size={15} color={colors.grey} />
                  <Text style={MyStyles.text_sm_grey}>Da Nang</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList 
            style={{marginTop: 10}}
            horizontal
            inverted
            data={newsData}
            keyExtractor={(item) => item.id}
            // pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
            return(
              <View>
                <View style={[styles.boderImage]}>
                  <Image style={styles.imageNew} source={item.imageUrl} />
                </View>
              </View>
            )}}
          />

          <View>
            <Text style={[MyStyles.text_xl,{marginTop:'5%'}]}>Top partner</Text>
            <FlatList 
              style={{marginTop: 20}}
              horizontal
              data={usersData}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return(
                  <TouchableOpacity style={{marginEnd: 15}}>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Image style={styles.imageRetangle} source={item.image} />
                      <View>
                        <Text style={[MyStyles.text_md_bold,{marginTop: 5}]}> {item.name} </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>

          <View>
            <Text style={[MyStyles.text_xl,{marginTop:'5%'}]}>Near by</Text>
            <View style={{marginTop: 20}}>
              {usersData.map((item) => {
                return(
                  <TouchableOpacity key={item.id} style={{marginBottom:'5%'}}>
                      <View style={[styles.borderRetangle, {flexDirection:'row', borderRadius: 20}]}>
                        <Image style={[styles.imageCircle, {marginEnd:'5%'}]} source={item.image} />
                        <View style={{justifyContent:'center'}}>
                          <Text style={MyStyles.text_md_bold}> {item.name} </Text>
                          <View style={{flexDirection: 'row'}}>
                            <SimpleLineIcons name="location-pin" size={15} color={colors.grey} />
                            <Text style={MyStyles.text_sm_grey}> {item.address}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                            <Text style={MyStyles.text_sm}> {item.paymment} per hour</Text>
                            <TouchableOpacity style={styles.button}>
                              <Text style={MyStyles.text_sm_bold}>appointment</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        
                      </View>
                    </TouchableOpacity>
                )
              })}
            </View>
          </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  imageRetangle:{
    width: 60,
    height: 60,
    borderRadius: 10
  },
  imageCircle: {
    width: 70,
    height: 70,
    borderRadius: 50
  },
  boderImage:{
    width: 265,
    height: 155,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    // margin: 5
  },
  borderRetangle:{
    width: '100%',
    height: 80,
    padding: 10,
    alignItems:'center',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width:0,
      height:4
    },
    shadowRadius: 6
  },
  imageNew:{
    width: 260,
    height: 150,
    borderRadius: 10,
  },
  button: {
    width: 100,
    height: 19,
    borderRadius: 20,
    backgroundColor: colors.lightPink,
    alignItems:'center',
    marginStart: '10%'
  }
})