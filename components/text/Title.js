import { Text, StyleSheet } from "react-native";

const Title = props => {
    return (
    <Text style={styles.heading1}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    heading1:{
        marginStart: 20,
        marginTop: 30,
        fontSize: 40,
        fontFamily: "bold"
    },
});
export default Title;