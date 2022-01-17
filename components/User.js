import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconOcticons from "react-native-vector-icons/Octicons";

const { height, width } = Dimensions.get("screen");

const User = ({ params }) => (
    <View style={styles.userContainer}>
        <View style={styles.inputContainer}>
            <IconFeather name='user' size={30} />
            <TextInput style={styles.input} placeholder='Steve Jobs' />
        </View>
        <IconOcticons name='diff-added' size={30} />
    </View>
);

const styles = StyleSheet.create({
    userContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5,
        backgroundColor: "#CBD5E1",
        paddingHorizontal: 2,
        paddingVertical: 5,
    },
    input: {
        // borderWidth: 1,
        padding: 5,
        marginHorizontal: 5,
        width: width / 1.25,
        borderRadius: 5,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default User;
