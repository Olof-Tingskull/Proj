import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import styles from "../../styles"

const TaskView = ({ navigation , route }) => {
    return (
        <ScrollView>
            <Text style={styles.taskTitleText} >{route.params.title}</Text>
            <Text style={styles.taskDescriptionText}>{route.params.description}</Text>
        </ScrollView>
    );
}

export default TaskView;