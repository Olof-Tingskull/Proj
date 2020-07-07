import React, { useState, useEffect } from "react";
import { View, Button, ScrollView, Text, TextInput } from "react-native";
import { v4 as uuidv4 } from 'uuid';

import styles from "../../styles";

const NewTask = ({ navigation , route }) => {
    const [task, setTask] = useState({
        id: uuidv4(),
        title: "",
        description: "",
    });

    const addTask = () => {
        navigation.navigate("Home", {newTask: task});
    }

    navigation.setOptions({
        headerRight: () => (
        <Button disabled={task.title == ""} title="Add" onPress={addTask} />
        ),
    });
    

    return (
        <ScrollView>
            <Text>Title</Text>
            <View style={styles.textInput}>
                <TextInput onChangeText={(text) => setTask((prevTask) => {return {...prevTask, title: text}})}/>
            </View>
            <Text>Description (optional)</Text>
            <View style={styles.textInput}>
                <TextInput numberOfLines={2} onChangeText={(text) => setTask((prevTask) => {return {...prevTask, description: text}})}/>
            </View>
            <Text>Adding a task does not work :/</Text>
        </ScrollView>
    );
}

export default NewTask;