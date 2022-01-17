import React from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("screen");

const Search = ({ params }) => (
    <View style={styles.searchContainer}>
        <IconAntDesign name='search1' size={25} />
        <TextInput
            style={{
                fontSize: 20,
                marginLeft: 5,
                width: width / 1.12,
                padding: 2,
            }}
            placeholder='Search product ...'
        />
    </View>
);

const styles = StyleSheet.create({
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 8,
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: "#fff",

        elevation: 4,
        padding: 5,
    },
});

export default Search;
