import React from "react";
import { View, Button, StyleSheet, Text, ScrollView } from "react-native";

const categorys = [
    "All Category",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashion",
    "All Category",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
];

const Category = ({ params }) => (
    <ScrollView horizontal={true} style={{ flexGrow: 0 }}>
        <View style={styles.categoryContainer}>
            {categorys.map((category) => (
                <Text
                    style={{
                        borderWidth: 1,
                        marginEnd: 8,
                        padding: 5,
                        borderRadius: 5,
                    }}
                    onPress={() => console.log("Clicked")}
                >
                    {category}
                </Text>
            ))}
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
});

export default Category;
