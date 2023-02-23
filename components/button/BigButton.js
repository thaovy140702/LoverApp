import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../../constants/colors";

const BigButton = props => {
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
            // ham xu ly khi nhan button
        }}>
        <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.pink,
        padding: 10,
        width: 325,
        height: 57,
        borderRadius: 30,
        marginHorizontal: 24,
        justifyContent: 'center'
      },
      text: {
        marginStart: 15,
        fontSize: 16,
        fontFamily: 'bold',
        color: colors.textColorWhite,
      },
});
export default BigButton;