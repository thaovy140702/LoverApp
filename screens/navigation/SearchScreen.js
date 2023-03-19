import {Button, Dimensions, FlatList, StyleSheet, TextInput, Image, View, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import RegularText from "../../components/text/RegularText";
import BoldText from "../../components/text/BoldText";
import { Feather, FontAwesome  } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Info from "../../components/Info";


const { width, height } = Dimensions.get("screen");

const ratingOptions = [1, 2, 3, 4, 5];


const searchItemData = [
  { id: 1, filter: "Da Nang" },
  { id: 2, filter: "HCM" },
  { id: 3, filter: "Da Nang" },
  { id: 4, filter: "Da Nang" },
  { id: 5, filter: "Da Nang" },
  { id: 6, filter: "Da Nang" }
]


const UserData = [
  {
    id: '12',
    name: "Lisa",
    image: 'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    rate: 1,
    price: 10,
    age: 20,
    gender: 'female',
    weight: 48,
    height: 165
  },
  {
    id: '123',
    name: "Lisa",
    image: 'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    rate: 5,
    price: 10,
    age: 20,
    gender: 'female',
    weight: 48,
    height: 165
  },
  {
    id: '1234',
    name: "Lisa",
    image: 'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    rate: 2,
    price: 10,
    age: 20,
    gender: 'female',
    weight: 48,
    height: 165
  },
  {
    id: '12345',
    name: "Lisa",
    image: 'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    rate: 4,
    price: 10,
    age: 20,
    gender: 'female',
    weight: 48,
    height: 165
  }
]


const UserItem = ({name, image, rate, price, age, gender, weight, height}) => (
  <View style={{alignItems: 'center'}}>
    
    {/* <Image source={{uri: image}} style={styles.imageUser}/> */}
    <View style={styles.userCardView}>

      <View style={{alignItems: 'center'}}>
      <BoldText text={name}/>
      <View style={{flexDirection: 'row'}}>
      {
        ratingOptions.map((option) => (
          <FontAwesome name={rate >= option ? 'heart' : 'heart-o'} 
                    size={16} 
                    color={colors.pink}
                    style={{margin: 1.5}} />
        ))
      }
      </View>
      <BoldText text={`$ ` + price + ` /hour`} color={colors.pink} fontSize="16"/>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly'}}>
        <Info type = "Age" value={age} />
        <Info type = "Gender" value={gender} />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
    
      <Info type="Weight" value={weight} />
      <Info type="Height" value={height} />
      </View>


      <TouchableOpacity style={styles.button} onPress={() => {}}>
        
        <BoldText text="Appointment" color={colors.pink}/>
        
      </TouchableOpacity>
    </View>
    <Image source={{uri: image}} style={styles.imageUser}/>
  </View>
)

const SearchScreen = () => {

  const [filter, setFilter] = useState(searchItemData)

  const onSelect = (item, index) => {
    const newArrFilter = filter.map(e => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: !e.selected
        }
      }
      return {
        ...e,
        selected: e.selected
      }
    })
    setFilter(newArrFilter);
  }
  
  return (
    <View>
      <SafeAreaView style={{ width, height, position:'absolute', top:0 }}>
        <View style={styles.headerTitle}>
          <Feather name="map-pin" size={24} color={colors.grey} />
          <RegularText text=" Da Nang" color={colors.grey}/>
        </View>

        <View style={styles.searchInput}>
          
          <TextInput
            style={styles.textInputSearch}
            placeholder="Search"
            selectionColor={colors.pink}
          />
          <Feather
            style={styles.iconSearch}
            name="search"
            size={24}
            color="black"
          />
        </View>

        <View style={{ flex: 0.3, marginTop: '5%'}}>
          <FlatList
          data={filter}
          numColumns={3}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => onSelect(item, index)}
                style={[styles.searchItem,{ 
                  backgroundColor: item.selected
                        ? "rgba(255, 159, 159, 0.2)"
                        : "white",
                  }]}>
                <RegularText text={item.filter} color={colors.pink}/>
                {item.selected &&
                <Feather style={{marginLeft: 5}} name="x-circle" size={16} color="white" />
                }
                </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.id}
          />
        </View>

        <View style={{flex: 1}}>
          <FlatList
            horizontal
            style={{flex: 1}}
            data={UserData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <UserItem
                name={item.name}
                image={item.image}
                rate={item.rate}
                price={item.price}
                age={item.age}
                gender={item.gender}
                weight={item.weight}
                height={item.height}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <TouchableOpacity style={{flex: 0.5, alignItems: 'center'}}>
          <BoldText text="Have it later" color={colors.pink} textDecorationLine='underline'/>
        </TouchableOpacity> 
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  headerTitle: {
    marginVertical: "5%",
    marginHorizontal: "5%",
    justifyContent: 'center',
    flexDirection: "row",
  },
  searchInput: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: "2%",
  },
  iconSearch: {
    start: -10,
    position: "absolute",
    backgroundColor: 'rgba(255, 159, 159, 1)',
    borderRadius: 20,
    padding: 15,
    width: 55,
    height: 60,
  },
  textInputSearch: {
    height: 60,
    width: "85%",
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingStart: 65,
    borderColor: colors.lightGrey,
    color: colors.textColorBlack,
    fontFamily: "medium",
  },
  searchItem: {
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginHorizontal: 2,
    marginBottom: 10,
    width: 100,
    shadowColor: colors.pink,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.9,
    elevation: 5,
  },
  imageUser: {
    height: 90,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
  },
  userCardView: {
    backgroundColor: 'white',
    marginTop: 45,
    marginBottom: 20,
    marginHorizontal: 20,
    height: 300,
    width: 220,
    borderRadius: 20,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    shadowColor: colors.pink,
    shadowOffset: {
      width: 1,
      height: -5
    },
    shadowRadius: 7,
    shadowOpacity: 0.5,
    elevation: 10
  },
  button:{
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: colors.pink,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: '5%',
    alignSelf: 'center'
  }
});
