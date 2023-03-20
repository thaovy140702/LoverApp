import { View, Text, Dimensions, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import MyStyles from '../../../constants/MyStyles'
import colors from '../../../constants/colors';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Indicator from '../../../components/Indicator';

const {width, height} = Dimensions.get('window')

const EditProfileScreen = () => {

    const navigation = useNavigation()
  return (
    <SafeAreaView style={{width, height, backgroundColor:'#f7f7f7'}}>
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', marginTop:'8%', marginHorizontal:20, alignItems:'center', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.goBack())}>
                    <MaterialIcons style={MyStyles.arrowBack} name="keyboard-arrow-left" size={24} color={colors.pink} />
                </TouchableOpacity>
                <Text style={[MyStyles.text_md_bold,{start: 0}]}>Edit Profile</Text>
                <TouchableOpacity>
                    <MaterialIcons name="fact-check" size={24} color={colors.pink} />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={{paddingHorizontal: 20}}>

                <View style={{marginTop:'5%', alignItems:'center', position:'relative', paddingBottom: 10}}>
                    <Image style={styles.userImage} source={require('../../../assets/images/userimage.jpg')} />
                    <TouchableOpacity style={{position: 'absolute', bottom: 0 }}>
                        <MaterialCommunityIcons style={styles.camera} name="camera-flip-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    {/* <Indicator title="name" /> */}
                </View>

            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    userImage:{
      width: 100,
      height:100,
      borderRadius:50
    },
    camera: {
        backgroundColor: ' rgba(255, 255, 255, 0.72)',
        borderRadius: 5,
        padding: 2
    }
  })