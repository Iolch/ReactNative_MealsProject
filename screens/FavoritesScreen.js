import React from 'react';
import {
  Button,
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

FavoritesScreen.navigationOptions = (navigationData) => {
  return{
      headerTitle: "Favorites <3",
      headerLeft: () => <Button title='menu' onPress={() => {navigationData.navigation.toggleDrawer()}}/>, 
  };
};


const styles = StyleSheet.create({
});

export default FavoritesScreen;
