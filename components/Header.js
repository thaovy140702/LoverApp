import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from "@expo/vector-icons";
import MyStyles from "../constants/MyStyles";

const HeaderLeft = () => {
    return(
        <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/images/userimage.jpg')} style={styles.image}/>
            <View style={{flexDirection:'column', justifyContent:'flex-start', marginStart: '8%'}}>
                <Text style={[MyStyles.text_md_bold,{marginStart:'5%'}]}>Anna</Text>
                <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
                    <Entypo name="dot-single" style={{ margin:"-10%"}} size={24} color="green" />
                    <Text style={MyStyles.text_sm_grey}>Active</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HeaderPartnerLeft = () => {
    return(
        <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/images/userimage.jpg")} style={styles.image} />
              <View style={{ flexDirection: "column", justifyContent: "flex-start", marginStart: "8%"}} >
                <Text style={[MyStyles.text_md_bold, { marginStart: "5%" }]}>Anna</Text>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} >
                  <Entypo name="dot-single" style={{ margin: "-10%" }} size={24} color="green"/>
                  <Text style={MyStyles.text_sm_grey}>Active</Text>
                </TouchableOpacity>
              </View>
            </View>
    )
}

export {HeaderLeft, HeaderPartnerLeft}

const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
})