import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Constants imports

import DefaultStyles from '../constants/DefaultStyle';
import Colors from '../constants/Colors';

// Data import
import {CATEGORIES} from '../data/dummy-data';

// Components imports
import CategoryGridTyle from '../components/CategoryGridTyle';
const CategoriesScreen = (props) => {


  const renderGridItem = (itemData) => {
    return(
      <CategoryGridTyle 
        category={itemData.item} 
        onPress={(id) => props.navigation.navigate({
                                                    routeName:'CategoryMeals', 
                                                    params:{categoryId: id}
                                                  })}
      />
      
    );
  };

  return (
    // We can use a flatlist to show a grid as well
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
    return {
      headerTitle: 'Meal Categories',
      headerLeft: () => <Button title='menu' onPress={() => {navigationData.navigation.toggleDrawer()}}/>, 
      headerStyle:{
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      }
    };
};

const styles = StyleSheet.create({
});

export default CategoriesScreen;
