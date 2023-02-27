import React from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text } from "react-native";
import heartImageBackground from '../assets/images/birth.png';
import BigButton from "../components/button/BigButton";
import { Feather } from '@expo/vector-icons';


class ChooseAge extends React.Component {

    state = { 
        age: 18 
      };
    
      setAgeDescrease = () => {
        if(this.state.age > 18) {
          this.setState({
            age: this.state.age - 1
          })
        }
      }
    
      
      setAgeIncrease = () => {
          this.setState({
            age: this.state.age + 1
          })
      }
        
    render() {
        const { age } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground source={heartImageBackground} style={styles.image}>

                    <View style={styles.select}>
                        <TouchableOpacity onPress={this.setAgeDescrease}>
                            <Feather name="chevron-up" size={40} color="black" />
                        </TouchableOpacity>
    
                        <Text style={styles.age}>{age}</Text>
          
                        <TouchableOpacity onPress={this.setAgeIncrease}>
                            <Feather name="chevron-down" size={40} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <BigButton text="Next"/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    select:{
        alignItems: 'center',
        marginTop: '80%',
        flex: 4,
    },
    age:{
        fontFamily: 'bold',
        fontSize: 32,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '5%'
    },
    button:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    }
});

export default ChooseAge;