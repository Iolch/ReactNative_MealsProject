import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';
import Colors from '../constants/Colors';

const FilterScreen = (props) => {
  return (
    <View style={DefaultStyles.screen}><Text>OI!</Text></View>
  );
};

const styles = StyleSheet.create({
});


FilterScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filter Categories',
    headerLeft: () => <Button title='menu' onPress={() => {navigationData.navigation.toggleDrawer()}}/>, 
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    }
  };
};

export default FilterScreen;
