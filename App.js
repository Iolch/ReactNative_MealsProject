
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

// Constants imports

import DefaultStyles from './constants/DefaultStyle';


enableScreens();
const App = () => {
  return (
    <MealsNavigator/>
  );
};

const styles = StyleSheet.create({
});

export default App;
