import { View, Text, Dimensions, ScrollView, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Indicator from '../../../components/Indicator';
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window')

const EditProfileScreen = () => {

    const { myProfile } = useSelector((state) => state.other);
    const {id, email, username} = useSelector((state) => state.user);
    const old = String(myProfile.old)
    const phone = String(myProfile.phone)

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

            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style={{flex: 1,paddingHorizontal: 20}}>

                <View style={{marginTop:'5%', alignItems:'center'}}>
                    <View style={{position:'relative', padding: 1}}>
                        <Image style={styles.userImage} source={{ uri: myProfile.img}} />
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
                    <Indicator title="Describe" text='' numberOfLines={2} maxLength={50} />
                    <Indicator title="Username" text={username} />
                    <Indicator title="Email" text={email} editable={false} selectTextOnFocus={false}/>
                    <Indicator title="Gender" text= {myProfile.gender} />
                    <Indicator title="Age" text= {old} />
                    <Indicator title="Phone" text={phone} />
                    <Indicator title="Character" text="" />
                    <Indicator title="Appearance" text="" />
                </KeyboardAvoidingView>

                

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