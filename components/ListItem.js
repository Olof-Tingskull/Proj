
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity as Touch,
} from 'react-native';

import Icon from "react-native-vector-icons/dist/FontAwesome"

const ListItem = ({item, deleteItem}) => {
  return (
    <Touch style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text>{item.text}</Text>
            <Icon 
                name="remove" 
                size={30} 
                color="firebrick" 
                onPress={() => deleteItem(item.id)} 
            />
        </View>
    </Touch>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listItemText: {
        fontSize: 18,
    }
})


export default ListItem;
