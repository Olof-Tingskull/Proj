import React, {useState} from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity as Touch
} from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"


const AddItem = ({addItem}) => {
    const [text, setText] = useState("")

    return (
        <View>
            <TextInput placeholder="item name" style={styles.input} onChangeText = {setText}/>
            <Touch style={styles.button} onPress={() => {
                addItem(text)
            }}>
                <Text style={styles.buttonText}>
                    <Icon name="plus" size={20} />
                    AddItem
                </Text>
            </Touch>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5,
    },
    buttonText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center",
    }
})

export default AddItem