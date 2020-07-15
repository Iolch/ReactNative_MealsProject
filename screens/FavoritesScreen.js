import React from 'react';
import {
  Button,
  Text,
  StyleSheet,
  View,
} from 'react-native';

// Components imports
import MealList from '../components/MealList';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';

// redux
import {useSelector} from 'react-redux';

const FavoritesScreen = (props) => {

  const favMeals = useSelector(state => state.mealsReducer.favoriteMeals);
  if(favMeals.length === 0 || isNaN(favMeals.length)){
    return (<View style={DefaultStyles.full}><Text>No favorites!</Text></View>);
  }  
  return (<MealList meals={favMeals} onPress={(id, title) => {props.navigation.navigate({routeName:'MealsFavoriteDetail', params:{mealId: id, mealTitle: title}})} }/>  );
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
