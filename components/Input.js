import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../constants/colors";
import { AntDesign } from '@expo/vector-icons';

const Input = props => {

    // const [text, onChangeText] = React.useState('');
    const onChangeText = text => {
        props.onInputChanged(props.id, text)
    }

    let field = props.id

    return <View>

        <View style={styles.inputContainer}>
        <TextInput
        {...props}
        style={styles.input}
        selectionColor={colors.pink}
        onChangeText={onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={colors.grey}
        // value={text}
        />
        </View>


       {
            props.errorText &&
            <View style={styles.errorContainer}>
                <AntDesign 
                    name="exclamationcircleo" 
                    size={16} 
                    color={colors.textColorRed} 
                />
                <Text style={styles.errorText}>{props.errorText[field]}</Text>
            </View>
        }

    </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: 300,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        borderColor: colors.lightGrey,
        color: colors.textColorBlack,
        // backgroundColor: 'white',
        paddingStart: 20,
        fontFamily: 'medium',
      },
      errorContainer:{
        marginStart: '9%',
        marginTop: '2%',
        flexDirection: 'row'
      },
      errorText: {
        marginLeft: '2%',
        color: colors.textColorRed,
        fontFamily: 'regular',
        fontSize: 12
      },
});

export default Input;