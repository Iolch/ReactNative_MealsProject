import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Constants import
import Colors from '../constants/Colors';
import DefaultStyle from '../constants/DefaultStyle';


const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
        <TouchableOpacity 
            onPress={()=>{props.onPress()}}
        >
            <View>
                <View style={{...styles.row, ...styles.header}}>
                    <ImageBackground source={{uri: props.image}} style={styles.backgroundImage}>
                        <Text style={{...DefaultStyle.title, ...styles.title}} >{props.title}</Text>
                    </ImageBackground>
                    
                </View>
                <View style={{...styles.row, ...styles.detail}}>
                    <Text>{props.duration}m</Text>
                    <Text style={DefaultStyle.textHighlight}>{props.complexity.toUpperCase()}</Text>
                    <Text style={DefaultStyle.textHighlight}>{props.affordability.toUpperCase()}</Text>
                
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',

    },
    title:{
        color: "#fff",
        backgroundColor: 'rgba(0,0,0, 0.4)',
        textAlign: 'center',
        
    },
    header:{
        height: '80%'
    },
    detail:{
        height:'20%',
        justifyContent:'space-evenly',
        padding: 10,

    },
    mealItem:{
        backgroundColor: "#fff",
        width:"100%",
        height: 200,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginVertical: 5,
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
});

export default MealItem;
