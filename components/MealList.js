import React from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';

// Components imports
import MealItem from '../components/MealItem';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return(
          <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onPress={() => {props.onPress(itemData.item.id, itemData.item.title)}}
          />
        );
    }

    return (
        <View style={DefaultStyles.screen}>
            <FlatList data={props.meals} renderItem={renderMealItem} style={styles.full}/>  
        </View>
    );
};

const styles = StyleSheet.create({
    full:{
        width:"100%",
    }
});

export default MealList;
