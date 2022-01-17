import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Dimensions,
    ScrollView,
    Image,
} from "react-native";
import Category from "./components/Category";
import MenuBar from "./components/MenuBar";
import Products from "./components/Products";
import Search from "./components/Search";
import User from "./components/User";

const { height } = Dimensions.get("screen");

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <MenuBar />
                <User />
                <Search />
                <View style={styles.productContainer}>
                    <Category />
                    <Products />
                </View>
                <StatusBar style='auto' />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: "#fff",
    },

    productContainer: {
        backgroundColor: "#F1F5F9",
        minHeight: height / 1.3,
    },
});
