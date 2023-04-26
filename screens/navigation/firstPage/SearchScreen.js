import {Button, Dimensions, FlatList, StyleSheet, TextInput, Image, View, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import RegularText from "../../../components/text/RegularText";
import BoldText from "../../../components/text/BoldText";
import { Feather, FontAwesome, AntDesign  } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Info from "../../../components/Info";
import usersData from ".././data/usersData";
import { getAllPartners } from "../../../utils/actions/partnerAction";
import { useDispatch, useSelector } from "react-redux";


const { width, height } = Dimensions.get("screen");
const ratingOptions = [1, 2, 3, 4, 5];

const searchItemData = [
  { id: 1, filter: "Da Nang" },
  { id: 2, filter: "Ho Chi Minh" },
  { id: 3, filter: "Da Nang" },
  { id: 4, filter: "Da Nang" },
  { id: 5, filter: "Da Nang" },
  { id: 6, filter: "Da Nang" }
]

const UserItem = ({ name, image, rate, price, age, gender, weight, height}) => (
  <View style={{alignItems: 'center', marginEnd: 20}}>
    
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
    <Image source={image} style={styles.imageUser}/>
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

  const dispatch = useDispatch()

  const {partners, error} = useSelector(state=>state.partner)
  console.log(partners,error)

  useEffect(() => {
    dispatch(getAllPartners())
  }, [dispatch])

  return (
    
    <SafeAreaView style={{ width, height, backgroundColor:'#f7f7f7'}}>
      <View style={{flex:1, paddingHorizontal:20}}>
        {/* <View style={styles.headerTitle}>
          <Feather name="map-pin" size={24} color={colors.grey} />
          <RegularText text=" Da Nang" color={colors.grey}/>
        </View> */}

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
            color="white"
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
                    paddingEnd: item.selected? 10 : 0,
                  }]}>
                <RegularText text={item.filter} color={colors.pink}/>
                {item.selected &&
                  <AntDesign style={{position:'absolute', end: 5}} name="closecircle" size={16} color="white" />
                }
                </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
          />
        </View>

        <View style={{flex: 1}}>
          <FlatList
            horizontal
            // style={{flex: 1}}
            data={partners}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <UserItem
                name={item.name}
                image={item.image}
                rate={item.rate}
                price={item.rent_cost}
                age={item.age}
                gender={item.gender}
                weight={item.weight}
                height={item.height}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <TouchableOpacity style={{flex: 0.2, alignItems: 'center'}}>
          <BoldText text="Have it later" color={colors.pink} textDecorationLine='underline'/>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  headerTitle: {
    marginVertical: "5%",
    // marginHorizontal: "5%",
    justifyContent: 'center',
    flexDirection: "row",
  },
  searchInput: {
    position:'relative',
    marginTop:'8%',
    flexDirection: "row",
    alignSelf: "center",
    alignItems:'center',
    marginVertical: "2%",
  },
  iconSearch: {
    // start: -10,
    position: "absolute",
    backgroundColor: 'rgba(255, 159, 159, 1)',
    borderRadius: 20,
    padding: 16,
    // width: 50,
    // height: 50,
  },
  textInputSearch: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    paddingStart: 65,
    backgroundColor: 'white',
    borderColor: 'pink',
    color: colors.textColorBlack,
    fontFamily: "medium",
  },
  searchItem: {
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginHorizontal: 5,
    marginBottom: 15,
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
    height: 300,
    width: 220,
    position:'relative',
    backgroundColor: 'white',
    marginTop: 50,
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
    padding:10,
    marginTop: '5%',
    alignSelf: 'center'
  }
});
