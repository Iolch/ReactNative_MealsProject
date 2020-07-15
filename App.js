
// follow navigation tutorial at https://reactnavigation.org/docs/4.x/getting-started/
import 'react-native-gesture-handler';


// if we install the package react-native-screens, it optmizes the navigation
import {enableScreens} from 'react-native-screens';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MealsNavigator from './navigation/MealsNavigation';

// using store
import {createStore, combineReducers} from 'redux';
import MealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux';

// Constants imports

import DefaultStyles from './constants/DefaultStyle';


enableScreens();

const rootReducer = combineReducers({
  mealsReducer: MealsReducer
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store ={store}> 

      <MealsNavigator/>

    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
