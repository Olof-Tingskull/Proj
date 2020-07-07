import React from "react";
import { View, Text, TouchableOpacity as Touch } from "react-native";
import styles from "../styles";


const Task = ({ task, onPress }) => {
    return (
        <View style={styles.taskView}>
            <Touch onPress={() => onPress(task)}>
                <Text>{task.title}</Text>
            </Touch>
        </View>
    )
}

export default Task;