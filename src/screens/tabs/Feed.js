import React from "react";
import { View, FlatList, Button } from "react-native";

import Task from "../../components/Task"

const Feed = ({ navigation , route }) => {

    const selectTask = (task) => {
        navigation.navigate("TaskView", task)
    }

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button title="New Task" onPress={() => navigation.navigate("NewTask")} />
            <FlatList 
            data={route.params.tasks}
            renderItem={({ item }) => <Task task={item} onPress={selectTask}/>}
            />
        </View>
    );
}

export default Feed;