import React,{
  useState,
} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';

// Data imports
import { CATEGORIES } from '../data/dummy-data';


const CategoriesMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const category = CATEGORIES.find(element => element.id === categoryId);

  
  
  return (
    <View style={DefaultStyles.screen}>
      <Button title='GO TO MEAL DETAIL' onPress={() => {props.navigation.navigate({routeName: "MealDetail"})}}/>
    </View>
  );
};

// when we need that the navigationOptions are dinamic 
CategoriesMealsScreen.navigationOptions = (navigationData) => {

  const categoryId = navigationData.navigation.getParam('categoryId');
  const category = CATEGORIES.find(element => element.id === categoryId);

  return {
    headerTitle: category.title
  };

}

const styles = StyleSheet.create({
 
});

export default CategoriesMealsScreen;
