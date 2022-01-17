import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

let products = [
    {
        id: 1,
        name: "Pure white Polo",
        price: "43.00",
        image: "../../images/1.JPG",
    },
    {
        id: 2,
        name: "Pure White & Black Sleeve",
        price: "52.10",
        image: "../image/2.JPG",
    },
    {
        id: 3,
        name: "Levi's Red Tab Florence",
        price: "23.50",
        image: "../image/3.JPG",
    },
    {
        id: 4,
        name: "Pure white Polo",
        price: "35.99",
        image: "../image/4.JPG",
    },
    {
        id: 5,
        name: "Red & Blue T-Shirt",
        price: "61.36",
        image: "../image/5.JPG",
    },
    {
        id: 6,
        name: "Pure white Polo",
        price: "82.40",
        image: "../image/6.JPG",
    },
    {
        id: 7,
        name: "Pure White & Black Sleeve",
        price: "38.00",
        image: "../image/7.JPG",
    },
    {
        id: 8,
        name: "Red & Blue T-Shirt",
        price: "53.50",
        image: "../image/8.JPG",
    },
    {
        id: 9,
        name: "Levi's Red Tab Florence",
        price: "32.55",
        image: "../image/9.JPG",
    },
    {
        id: 10,
        name: "Pure white Polo",
        price: "46.36",
        image: "../image/1.JPG",
    },
    {
        id: 11,
        name: "Pure White & Black Sleeve",
        price: "95.00",
        image: "../image/10.JPG",
    },
    {
        id: 12,
        name: "Pure white Polo",
        price: "43.21",
        image: "../image/11.JPG",
    },
    {
        id: 13,
        name: "Pure White & Black Sleeve",
        price: "45.33",
        image: "../image/12.JPG",
    },
    {
        id: 14,
        name: "Pure white Polo",
        price: "46.36",
        image: "../image/1.JPG",
    },
    {
        id: 15,
        name: "Pure White & Black Sleeve",
        price: "95.00",
        image: "../image/10.JPG",
    },
    {
        id: 16,
        name: "Pure white Polo",
        price: "43.21",
        image: "../image/11.JPG",
    },
    {
        id: 17,
        name: "Pure White & Black Sleeve",
        price: "45.33",
        image: "../image/12.JPG",
    },
    {
        id: 18,
        name: "Pure white Polo",
        price: "46.36",
        image: "../image/1.JPG",
    },
    {
        id: 19,
        name: "Pure White & Black Sleeve",
        price: "95.00",
        image: "../image/10.JPG",
    },
    {
        id: 20,
        name: "Pure white Polo",
        price: "43.21",
        image: "../image/11.JPG",
    },
    {
        id: 21,
        name: "Pure White & Black Sleeve",
        price: "45.33",
        image: "../image/12.JPG",
    },
    {
        id: 22,
        name: "Pure white Polo",
        price: "46.36",
        image: "../image/1.JPG",
    },
    {
        id: 23,
        name: "Pure White & Black Sleeve",
        price: "95.00",
        image: "../image/10.JPG",
    },
    {
        id: 24,
        name: "Pure white Polo",
        price: "43.21",
        image: "../image/11.JPG",
    },
    {
        id: 25,
        name: "Pure White & Black Sleeve",
        price: "45.33",
        image: "../image/12.JPG",
    },
];

const Products = ({ params }) => (
    <View style={styles.productsContainer}>
        {products.map((product) => (
            <Image
                source={require("../assets/images/1.JPG")}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    productsContainer: {
        marginTop: 10,
    },
});

export default Products;
