import {Button, Dimensions, FlatList, StyleSheet, TextInput, Image, View, TouchableOpacity} from "react-native";
import React from "react";
import RegularText from "../../components/text/RegularText";
import BoldText from "../../components/text/BoldText";
import { Feather, FontAwesome  } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";


const { width, height } = Dimensions.get("screen");

// handle rating
const ratingOptions = [1, 2, 3, 4, 5];
// const [starRating, setStarRating] = useState(null);
// const animatedButtonScale = new Animated.Value(1);

const searchItemData = [
  {
    id: '1',
    filter: 'Da nang'
  },
  {
    id: '2',
    filter: 'Da nang'
  },
  {
    id: '3',
    filter: 'Da Nang'
  }
]

const UserData = [
  {
    id: '12',
    name: "Lisa",
    image: 'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    rate: 3,
    price: 10,
    age: 20,
    gender: 'female',
    weight: 48,
    height: 165
  }
]
const SearchItem = ({filter}) => (
  <View style={styles.searchItem}>
    <RegularText text={filter} color={colors.pink}/>
    <Feather style={{marginLeft: 5}} name="x-circle" size={16} color="white" />
  </View>
)

const UserItem = ({name, image, rate, price, age, gender, weight, height}) => (
  <View style={{alignItems: 'center'}}>
    
    {/* <Image source={{uri: image}} style={styles.imageUser}/> */}
    <View style={styles.userCardView}>
      <BoldText text={name} />

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

      <View style={{flexDirection: 'row', marginTop: '5%'}}>
        <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <RegularText text="Age" color={colors.pink}/>
          <RegularText text={age}/>
        </View>

        <View style={{flexDirection: 'column'}}>
          <RegularText text="Gender" color={colors.pink}/>
          <RegularText text={gender}/>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={{flexDirection: 'column'}}>
        <RegularText text="Weight" color={colors.pink}/>
        <RegularText text={weight}/>
      </View>

      <View style={{flexDirection: 'column'}}>
        <RegularText text="Height" color={colors.pink}/>
        <RegularText text={height}/>
      </View>
      </View>


      <TouchableOpacity style={styles.button} onPress={() => {}}>
        
        <BoldText text="Appointment" color={colors.pink}/>
        
      </TouchableOpacity>
    </View>
    <Image source={{uri: image}} style={styles.imageUser}/>
  </View>
)

const SearchScreen = () => {
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

        <View style={{ flex: 0.2}}>
          <FlatList
          data={searchItemData}
          numColumns={3}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({item}) => (
            <SearchItem 
              filter = {item.filter}
            />
          )}
          keyExtractor={(item) => item.id}
          />
        </View>

        
          <FlatList
            style={{flex: 1}}
            data={UserData}
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
    start: -5,
    position: "absolute",
    backgroundColor: colors.pink,
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
    backgroundColor: "rgba(255,159,159,0.2)",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 2
  },
  imageUser: {
    height: 90,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
  },
  userCardView: {
    alignItems: 'center',
    width: 200,
    marginTop: '10%',
    height: 300,
    borderColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: '5%',
    shadowColor: colors.lightPink,
    shadowOffset: {
      width: 1,
      height: -5
    },
    shadowRadius: 20,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  button:{
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: colors.pink,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: '5%'
  }
});
