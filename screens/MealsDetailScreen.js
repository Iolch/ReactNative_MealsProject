import React, {useEffect, useCallback} from 'react';
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

// redux
import {useSelector, useDispatch} from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const MealsDetailScreen = (props) => {
  const navigation = props.navigation;
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.mealsReducer.meals);
  const meal = availableMeals.find((element) => element.id === mealId);

  const dispatch = useDispatch(); // dispatch is kind of a trigger event
  const toggleFavoriteHandler = useCallback(  // using callback guarantee that it will only be re-created when mealId changes
    () => {                                   // so it wouldnt have a render loop
      dispatch(toggleFavorite(mealId));
      
    },[dispatch, mealId]
  );

  useEffect(() => {
    navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  return (
    <View style={DefaultStyles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
};

MealsDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');

  return{
    headerTitle: mealTitle,
    headerRight: () => <Button title="fav" onPress={navigationData.navigation.getParam('toggleFav')}/>
  };
};

const styles = StyleSheet.create({
});

export default MealsDetailScreen;
