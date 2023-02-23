import { StyleSheet, TouchableOpacity, Text } from "react-native";

const SmallButton = props => {
    return (
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: props.backgroundColor}]}
        onPress={() => {
            // ham xu ly khi nhan button
        }}>
        <Text style={[styles.text, {color: props.color}]}>{props.text}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        padding: 10,
        width: 148,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 5,
        justifyContent: 'center'
      },
      text: {
        fontSize: 16,
        fontFamily: 'bold'
      },
});
export default SmallButton;