import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../../components/button/BackButton'
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import MyStyles from '../../../constants/MyStyles';
import colors from '../../../constants/colors';
import BigButton from '../../../components/button/BigButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPartnerProfile } from '../../../utils/actions/partnerAction';
import { getListBooking, getProfile } from '../../../utils/actions/otherActions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';
import Rating from '../../../components/Rating';

const ScheduleDescriptionScreen = () => {

    const navigation = useNavigation()
    const [isChecked, setIsChecked] = useState(false)
    const [isModalContract, setIsModalContract] = useState(false)
    // const [isModalDeny, setIsModalDeny] = useState(false)
    const [isModalConfirm, setIsModalConfirm] = useState(false)
    const [isModalEvaluate, setIsModalEvaluate] = useState(false)

    const {
        params :{
            idBooking,
            idBookingUser,
            idBookingParter,
            status,
            price,
            startDate,
            endDate,
            day,
            address
        }
      } = useRoute()
    const dispatch = useDispatch();

    // const { role } = useSelector((state) => state.user);
    const { partner } = useSelector((state) => state.partner);
    const { role, myProfile} = useSelector((state) => state.other);
  
    useEffect(() => {
      dispatch(getPartnerProfile(idBookingParter));
    //   dispatch(getListBooking(idBooking));
      // dispatch(getProfile(booking[0].user_id));
      dispatch(getProfile(idBookingUser));
    }, [dispatch]);

    const date = new Date(day);
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const dayBook = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;
    const startDay = `${date1.getHours()} : ${date1.getMinutes()} - ${date1.getDate()} ${date1.getMonth()}, ${date1.getFullYear()}`;
    const endDay = `${date2.getHours()} : ${date2.getMinutes()} - ${date2.getDate()} ${date2.getMonth()}, ${date2.getFullYear()}`;

    const userProfile = role === 'user' ? myProfile : partner
    console.log(userProfile)
    const changeModalContract = (bool) => {
        setIsModalContract(bool)
    }
    // const changeModalDeny = (bool) => {
    //     setIsModalDeny(bool)
    // }
    const changeModalConfirm = (bool) => {
        setIsModalConfirm(bool)
    }
    const changeModalEvaluate = (bool) => {
        setIsModalEvaluate(bool)
    }

  return (
    <SafeAreaView style={{flex:1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <View style={styles.headerStyle}>
        <BackButton />
        <Text style={[MyStyles.text_xxl, {color:colors.pink}]}>$ {price}</Text>
      </View>

      <View style={styles.borderShadow}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {/* <Image style={styles.image} source={{uri: userProfile.img}} />
                <Text style={[MyStyles.text_md_bold,{marginStart:8}]}>{userProfile.name}</Text> */}
            </View>
            <TouchableOpacity style={styles.borderLine}>  
                <Feather name="phone" size={16} color="gray" />
            </TouchableOpacity>
        </View>
        <View style={styles.divide}>
            <Text style={[MyStyles.text_md,{marginVertical: 5}]}>Have something to discuss</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')} style={[styles.borderBgr,{marginBottom:10, flexDirection:'row', alignItems:'center'}]}>
                <Feather name="send" size={16} color="gray" />
                <Text style={[MyStyles.text_sm, {color:'gray', marginStart: 8}]}>Send message</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.borderShadow,{marginTop: 20}]}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
                <Feather name="calendar" size={24} color={colors.pink} />
                <View style={{marginStart: 8}}>
                    <Text style={[MyStyles.text_md_bold,{color:colors.pink}]}>{dayBook}</Text>
                    <Text style={[MyStyles.text_sx,{color:'gray'}]}>{status}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Feather name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome5 name="dot-circle" size={10} color={colors.lightPink} />
                <Text style={[MyStyles.text_sm,{marginStart: 8}]}>{startDay}</Text>
            </View>
            <View style={{width: 1, height: 15, backgroundColor:'pink', marginStart: 4}} />
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome5 name="dot-circle" size={10} color={colors.lightPink} />
                <Text style={[MyStyles.text_sm,{marginStart: 8}]}>{endDay}</Text>
            </View>
        </View>
        <View style={{marginTop: 20, flexDirection:'row'}}>
            <Feather name="map-pin" size={20} color={colors.lightPink} />
            <Text style={[MyStyles.text_md,{marginStart: 8, maxWidth: '90%'}]}>{address}</Text>
        </View>
        <View style={[styles.borderBgr, {height: 100, marginVertical: 10}]} />
      </View>
      
      {
        status === 'INACCEPT' && (
            <View style={{position: 'absolute', bottom: 30, alignSelf:'center'}}>
                <BigButton onPress={() => changeModalContract(true)} text='Confirm' style={{borderRadius: 15}}/>
                <BigButton onPress={() => changeModalConfirm(true)} text='Deny' styleText={{color: colors.pink}} 
                    style={{borderRadius: 15, borderWidth: 1, borderColor: colors.pink, marginTop: 10, backgroundColor:'white'}}
                />
            </View>
        )
        || status === 'ACCEPT' && (
            <View style={{position: 'absolute', bottom: 20, alignSelf:'center'}}>
                <BigButton text='Completion' styleText={{color: colors.pink}} 
                    style={{borderRadius: 15, borderWidth: 1, borderColor: colors.pink, marginTop: 10, backgroundColor:'white'}}
                    onPress={() => changeModalConfirm(true)}
                />
            </View>
        )
        || status === 'FINISH' && (
            <View style={{position: 'absolute', bottom: 20, alignSelf:'center'}}>
                <BigButton text='Evaluate' style={{borderRadius: 15}}/>
                <BigButton text='New appointment' styleText={{color: colors.pink}} 
                    style={{borderRadius: 15, borderWidth: 1, borderColor: colors.pink, marginTop: 10, backgroundColor:'white'}}
                />
            </View>
        )
        || status === 'CANCEL' && (
            <View style={{position: 'absolute', bottom: 20, alignSelf:'center'}}>
                <BigButton text='New appointment' styleText={{color: colors.pink}} 
                    style={{borderRadius: 15, borderWidth: 1, borderColor: colors.pink, marginTop: 10, backgroundColor:'white'}}
                />
            </View>
        )
      }

      {/* Inaccept modal */}
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalContract}
        onRequestClose={() => changeModalContract(false)}
      >
        <View style={styles.modal}>
            <View style={{flexDirection:'row'}}>
                <ExpoCheckbox value={isChecked} onValueChange={setIsChecked} color={colors.pink}/>
                <Text style={[MyStyles.text_md, {marginStart: 8, maxHeight:200}]}>I agree with all the terms listed in the contract</Text>
            </View>
            <View style={{marginTop: 30, justifyContent:'space-around', flexDirection:'row'}}>
                <TouchableOpacity onPress={() => changeModalContract(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {!isChecked? null : changeModalContract(false)}}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

      {/* <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalDeny}
        onRequestClose={() => changeModalDeny(false)}
      >
        <View style={styles.modal}>
            <View style={{ alignItems:'center'}}>
                <Text style={MyStyles.text_md}>Are you sure?</Text>
            </View>
            <View style={{marginTop: 30, justifyContent:'space-around', flexDirection:'row'}}>
                <TouchableOpacity onPress={() => changeModalDeny(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeModalDeny(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal> */}
      
      {/* Accept, Deny modal */}
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalConfirm}
        onRequestClose={() => changeModalConfirm(false)}
      >
        <View style={styles.modal}>
            <View style={{ alignItems:'center'}}>
                <Text style={MyStyles.text_md}>Are you sure?</Text>
            </View>
            <View style={{marginTop: 30, justifyContent:'space-around', flexDirection:'row'}}>
                <TouchableOpacity onPress={() => changeModalConfirm(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeModalConfirm(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
      
      {/* Finish modal */}
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalEvaluate}
        onRequestClose={() => changeModalEvaluate(false)}
      >
        <View style={[styles.modal,{height:280, padding: Platform.OS === 'ios'? -20 : 0}]}>
            <View style={{ alignItems:'center'}}>
                {/* <Image source={{uri: myProfile.img}} style={styles.image}/> */}
                <Rating rate='3'/>
                <View>
                    <Text style={[MyStyles.text_md,{marginBottom: 10}]}>Give your opinion about this experience</Text>
                    <TextInput style={styles.textArea} multiline={true} editable={true} placeholder='Write something ...' />
                </View>
            </View>
            <View style={{marginTop: 25, justifyContent:'space-around', flexDirection:'row'}}>
                <TouchableOpacity onPress={() => changeModalEvaluate(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeModalEvaluate(false)}>
                    <Text style={[MyStyles.text_md,{color:'blue'}]}>Evaluate</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>


    </SafeAreaView>
  )
}

export default ScheduleDescriptionScreen

const styles = StyleSheet.create({
    headerStyle: {
        // flex: .1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
        // backgroundColor: 'red'
    },
    borderShadow:{
        padding: 10,
        // marginVertical: 10,
        borderRadius: 10,
        backgroundColor:'white',
        shadowColor:'pink',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.2,
        shadowRadius:10,
        elevation:2
    },
    borderLine:{
        padding: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10
    },
    borderBgr:{
        padding: 10,
        backgroundColor: colors.lightGrey,
        borderRadius: 10
    },
    divide:{
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        paddingTop: 15,
        marginTop: 10
    },
    image:{
        width: 30,
        height: 30,
        borderRadius: 30
    },
    modal:{
        top: '30%',
        width: '90%',
        height: 150,
        padding: 20,
        borderRadius: 10,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        shadowColor:'black',
        shadowOffset:{
            width: 1,
            height: 5
        },
        shadowOpacity:.4,
        shadowRadius:10,
        elevation:100
    },
    textArea: {
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 100, 
        backgroundColor:'white', 
        borderColor: colors.pink_20, 
        borderWidth: 1
    }
})