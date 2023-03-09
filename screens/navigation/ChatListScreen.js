import { FlatList, Image, ImageBackground, StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import imageBackground from '../../assets/images/Rectangle5.png'
import HeaderTitle from '../../components/text/HeaderTitle'
import RegularText from '../../components/text/RegularText'
import { Feather } from '@expo/vector-icons';
import colors from '../../constants/colors'
import MyStyles from '../../constants/MyStyles'

const DATA = [
  {
    id: '123456',
    image:'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    name: 'Lisa',
    lastMessage: 'Hi',
    time: '06:00 AM'
  },
  {
    id: '12345633',
    image:'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    name: 'Lisa',
    lastMessage: 'Hi',
    time: '06:00 AM'
  },
  {
    id: '12345564633',
    image:'https://i.pinimg.com/564x/ff/c4/b7/ffc4b7a16b9f80fae9a81c36ce9cbb54.jpg',
    name: 'Lisa',
    lastMessage: 'Hi',
    time: '06:00 AM'
  },
];


// user item
const Item = ({image, name, lastMessage, time}) => (
  <View style={styles.item}>

    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.userImage}/>
    </View>

    <View style={styles.content}>
      <HeaderTitle text={name} fontSize={16}/>
      <View style={MyStyles.flexDirection}>
        <RegularText text={lastMessage} color={colors.grey}/>
        <RegularText text={time} color={colors.grey}/>
      </View>
    </View>
  </View>
  
);

const ChatListScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={imageBackground} style={styles.background}>
        <View style={styles.headerTitle}>
          <HeaderTitle text="Contact" fontSize={20}/>
          <Feather name="bell" size={24} color="black" />
        </View>

        <View style={styles.searchInput}>
        <Feather style={styles.iconSearch} name="search" size={24} color="black" />
        <TextInput 
          style={styles.textInputSearch}
          placeholder='Search'
          selectionColor={colors.pink}
        />
        </View>

      <View>
        <FlatList
         data={DATA}
         renderItem={
          ({item}) => <Item image={item.image}
                            name={item.name}
                            lastMessage={item.lastMessage}
                            time={item.time} />}
         keyExtractor={item => item.id}
        />
      </View>

      </ImageBackground>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  background: {
    height: '40%',
    width: '100%',
    resizeMode: 'cover',
  },
  headerTitle: {
    marginVertical: '10%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '2%'
  },
  iconSearch: {
    backgroundColor: colors.pink,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 15,
    width: 55,
    height: 60,
  },
  textInputSearch: {
    height: 60,
    width: '75%',
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    borderColor: colors.lightGrey,
    color: colors.textColorBlack,
    fontFamily: 'medium'
  },
  item:{
    flexDirection: 'row',
    paddingTop: '5%',
    width: '90%',
    marginHorizontal: '5%',
    justifyContent: 'center'
  },
  userImage:{
    height: 60,
    width: 60,
    borderRadius: 40
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,159,159,0.4)',
    overlayColor: '40%',
    borderTopLeftRadius: 20,
    width: 70,
    height: 70
  },
  content:{
    backgroundColor: 'rgba(255,159,159,0.1)',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 70,
    width: '80%',
    paddingHorizontal: '5%',
    justifyContent: 'center'
  }
  
})