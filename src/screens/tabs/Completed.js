import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../../styles"

const Completed = () => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>This Screen should show all your completed tasks</Text>
            <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
            <Text>But it does not work so here is an image</Text>
        </View>
    );
}

export default Completed;