import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

const menu = [
    {
        icon: "",
        text: "Note",
    },
];

const MenuBar = ({ params }) => (
    <ScrollView horizontal={true} style={{ flexGrow: 0 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
            <IconEntypo name='menu' size={40} />
            <View style={styles.singleNote}>
                <IconFontAwesome5
                    size={20}
                    name='sticky-note'
                    style={{ marginRight: 5 }}
                />
                <Text style={{ fontSize: "20px" }}>Note</Text>
            </View>
            <View style={styles.singleNote}>
                <IconFontAwesome5
                    size={20}
                    name='shipping-fast'
                    style={{ marginRight: 5 }}
                />
                <Text style={{ fontSize: "20px" }}>Shipping</Text>
            </View>
            <View style={styles.singleNote}>
                <IconFontAwesome5
                    size={20}
                    name='border-all'
                    style={{ marginRight: 5 }}
                />
                <Text style={{ fontSize: "20px" }}>Hold Order</Text>
            </View>
            <View style={styles.singleNote}>
                <IconFontAwesome5
                    size={20}
                    name='plus-circle'
                    style={{ marginRight: 5 }}
                />
                <Text style={{ fontSize: "20px" }}>New Item</Text>
            </View>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    singleNote: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#CBD5E1",
        borderRadius: 5,
        paddingHorizontal: 5,
        marginRight: 5,
    },
});

export default MenuBar;
