import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// Components imports
import MealList from '../components/MealList';

// redux help us picking the info about meals stored at the reduce file 
import {useSelector} from 'react-redux';


// Data imports
import { CATEGORIES } from '../data/dummy-data';

const CategoriesMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.mealsReducer.filteredMeals);

  const meals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
  
  return (
      
    <MealList meals={meals} onPress={(id, title) => {props.navigation.navigate({routeName:'MealDetail', params:{mealId: id, mealTitle: title}})} }/>
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
