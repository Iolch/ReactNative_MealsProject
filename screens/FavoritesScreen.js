import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// Components imports
import MealList from '../components/MealList';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';

// Data imports
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2' );
  return (
    <MealList meals={favMeals} onPress={(id) => {props.navigation.navigate({routeName:'MealDetail', params:{mealId: id}})} }/>
  );
};


const styles = StyleSheet.create({
});

export default FavoritesScreen;
