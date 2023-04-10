import { View, Text, Dimensions, ScrollView, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Indicator from '../../../components/Indicator';

const {width, height} = Dimensions.get('window')

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={{width, height, backgroundColor:'white'}}>
        <View style={{flex:1}}>
            {/* <View style={{flexDirection:'row', paddingTop:'8%', paddingHorizontal:20, alignItems:'center', justifyContent:'space-between'}}>
                <BackButton />
                <Text style={[MyStyles.text_xxl,{start: 0}]}>Edit Profile</Text>
                <TouchableOpacity>
                    <MaterialIcons name="fact-check" size={24} color={colors.pink} />
                </TouchableOpacity>
            </View> */}

            <View
                // showsVerticalScrollIndicator={false}
                // scrollEventThrottle={16}
                style={{flex: 1,paddingHorizontal: 20}}>

                <View style={{marginTop:'5%', alignItems:'center'}}>
                    <View style={{position:'relative', padding: 1}}>
                        <Image style={styles.userImage} source={require('../../../assets/images/userimage.jpg')} />
                        <TouchableOpacity style={{position: 'absolute', bottom: 0, right:0}}>
                            <MaterialCommunityIcons style={styles.camera} name="camera-flip-outline" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View>
                    {
                        usersData.map(({item}) => {
                            if(item.id=1){
                                return(
                                    <Indicator title={item} />
                                ) 
                            }
                        })
                    }
                </View> */}
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "height" : undefined}
                    keyboardVerticalOffset={100}
                >
                    <Indicator title="Username" text='name' />
                    {/* <Indicator title="Password" text='*****' /> */}
                    <Indicator title="Genres" text='male' />
                    <Indicator title="Age" text='18' />
                    <Indicator title="Email" text='name@gmail.com' />
                    <Indicator title="Number" text='0962542727' />
                </KeyboardAvoidingView>

            </View>
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