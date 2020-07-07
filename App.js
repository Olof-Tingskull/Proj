import React, { useState, useCallback } from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from "./src/screens/tabs/Feed";
import Completed from "./src/screens/tabs/Completed";
import NewTask from "./src/screens/stacks/NewTask";
import TaskView from "./src/screens/stacks/TaskView";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
  return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Feed" component={Feed} initialParams={{ tasks: route.params.tasks }} />
        <BottomTab.Screen name="Completed" component={Completed}/>
      </BottomTab.Navigator>
  );
}

const App = () => {
  const [tasks, setTasks] = useState([
    {id: uuidv4(), title: "*This is the Title of the Task*", description: "This is the description where the user describes its task in more detail.\n This is not shown in the Feed."}
  ])

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task])
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          initialParams={{ tasks: tasks }}
        />
        <Stack.Screen 
          name="NewTask" 
          component={NewTask}
          options={{
            title: "New Task"
          }}
        />
        <Stack.Screen 
          name="TaskView" 
          component={TaskView}
          options={{
            title: "Task"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;