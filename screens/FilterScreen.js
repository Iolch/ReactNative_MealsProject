import React, {
  useState,
  useEffect,
  useCallback // alter a function in a way that its only executed when the param sets was changed 
} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

// Constants imports
import DefaultStyles from '../constants/DefaultStyle';
import Colors from '../constants/Colors';



const FilterSwitch = (props) => {
  return(
    <View style={styles.filter}>
    <Text>{props.label}</Text>  
      <Switch 
        trackColor = {{true: Colors.primary, false:'#ccc'}}
        thumbColor = {{true: Colors.primary}}
        value={props.value} 
        onValueChange={newValue => props.onValueChange(newValue)}/>
    </View>  
  );
}
const FilterScreen = (props) => {
  
  const { navigation }  = props;


  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  
  const saveFilters = useCallback (() => {
    const filters = {
      glutenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    return filters;
  }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian]);  // only will run if this consts has changed this cicle

  useEffect (() => {
    navigation.setParams({save: saveFilters});  // we do this, so we can access this function inside the navigation
  },[saveFilters]);

  return (
    <View style={{...DefaultStyles.screen, ...styles.screen}}>

      <Text style={DefaultStyles.title}>Availale Filters!</Text>
      <ScrollView style={styles.filtersContainer}>
        <FilterSwitch label='Gluten-free' value={isGluttenFree} onValueChange={(newValue) => setIsGluttenFree(newValue)}/>
        <FilterSwitch label='Lactose-free' value={isLactoseFree} onValueChange={(newValue) => setIsLactoseFree(newValue)}/>
        <FilterSwitch label='Vegan' value={isVegan} onValueChange={(newValue) => setIsVegan(newValue)}/>
        <FilterSwitch label='Vegetarian' value={isVegetarian} onValueChange={(newValue) => setIsVegetarian(newValue)}/>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    justifyContent: 'flex-start',
  },
  filtersContainer:{
    marginVertical: 30,
    width: '80%',
  },
  filter:{
    marginVertical: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


FilterScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filter Categories',
    headerLeft: () => <Button title='menu' onPress={() => {navigationData.navigation.toggleDrawer()}}/>, 
    headerRight: () => <Button title='save' onPress={() => {console.log(navigationData.navigation.getParam('save'))}}/>, 
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    }
  };
};

export default FilterScreen;
