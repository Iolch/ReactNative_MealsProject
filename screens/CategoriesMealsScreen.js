import React,{
  useState,
} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

// Components imports
import MealList from '../components/MealList';


// Data imports
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
  
  return (
      
    <MealList meals={meals} onPress={(id) => {props.navigation.navigate({routeName:'MealDetail', params:{mealId: id}})} }/>
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
