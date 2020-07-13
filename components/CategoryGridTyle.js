import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const CategoryGridTyle = (props) => {
  return (
    <TouchableOpacity 
        style={styles.grid} 
        onPress={()=>{props.onPress(props.category.id)}}
    >
        <View style={{...{backgroundColor: props.category.color}, ...styles.gridElement}}>
            <Text style={styles.text}>{props.category.title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    grid:{
        flex: 1,
        margin: 15,
        height: 150,
    },
    gridElement:{
        flex:1,
        padding: 10,
        justifyContent:"flex-end",
        alignItems: "flex-end",
        borderRadius: 3,
        shadowColor: '#CCCCCC',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius: 10,
        elevation:3
    },
    text:{
        fontSize:16,
        textAlign:"right"
    }
});

export default CategoryGridTyle;
