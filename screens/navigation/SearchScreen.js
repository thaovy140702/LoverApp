import { FlatList, ImageBackground, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import imageBackground from '../../assets/images/Rectangle5.png'
import HeaderTitle from '../../components/text/HeaderTitle'
import { Feather } from '@expo/vector-icons';
import colors from '../../constants/colors'



const SearchScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={imageBackground} style={styles.background}>
      
        <View style={styles.searchInput}>
        <Feather style={styles.iconSearch} name="search" size={24} color="black" />
        <TextInput 
          style={styles.textInputSearch}
          placeholder='Search'
          selectionColor={colors.pink}
        />
        <Feather style={styles.iconFilter} name="sliders" size={24} color="black" />
        </View>

        <View>
          <HeaderTitle text="Some advise" />
        </View>

      
      </ImageBackground>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  background: {
    height: '45%',
    width: '100%',
    resizeMode: 'cover',
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '15%',
    marginHorizontal: '5%'
  },
  iconSearch: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 11,
    width: 50,
    height: 50,
  },
  iconFilter: {
    end: 10,
    position: 'relative',
    backgroundColor: colors.pink,
    borderRadius: 10,
    padding: 11,
    width: 50,
    height: 50,
  },
  textInputSearch: {
    backgroundColor: 'white',
    height: 50,
    alignSelf: 'center',
    width: '65%',
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: colors.textColorBlack,
    fontFamily: 'medium'
  }
  
})