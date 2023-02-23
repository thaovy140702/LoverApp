import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../constants/colors";


const Input = props => {

    const [text, onChangeText] = React.useState('');

    return <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        value={text}
        />
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 327,
        borderWidth: 1,
        borderRadius: 16,
        padding: 10,
        marginStart: 24,
        marginTop: 30,
        borderColor: colors.lightGrey,
        color: colors.grey,
        paddingStart: 20,
        fontFamily: 'medium',
      },
});

export default Input;