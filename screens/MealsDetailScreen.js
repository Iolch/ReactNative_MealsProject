import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// import {HeaderButtons, Item} from 'react-navigation-header-buttons';

// Components imports
// import HeaderButton from '../components/HeaderButton';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';

// Data imports
import { MEALS } from '../data/dummy-data';

const MealsDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const meal = MEALS.find((element) => element.id === mealId);
  return (
    <View style={DefaultStyles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
};

MealsDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const meal = MEALS.find((element) => element.id === mealId);
  return{
    headerTitle: meal.title,
    headerRight: () => <Button title="fav" onPress={()=>{}}/>
  };
};

const styles = StyleSheet.create({
});

export default MealsDetailScreen;
