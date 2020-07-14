//special packages needed
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import {Platform} from 'react-native';

//import constants
import Colors from '../constants/Colors';


//import screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'

const MealsNavigator = createStackNavigator({
    Categories: {  //since this is the first, it will read as the inital route
        screen:CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                // headerTintColor: Platform.OS === 'android' ? '' : Colors.primary
            }
        }
    }, 
    CategoryMeals: CategoriesMealsScreen,
    MealDetail: MealsDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
            // headerTintColor: Platform.OS === 'android' ? 'black' : Colors.secondary
        }
    },
});

const FavoritesNavigator = createStackNavigator({
    Favorites:{screen:FavoritesScreen,
        navigationOptions:{
            headerTitle: "Favorites <3"
        }
    },
    MealsDetail:{screen: MealsDetailScreen}
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
            // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.blue
        }
    }
});

const MealsFavTaNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions:{}},
    Favorites: {screen: FavoritesNavigator, navigationOptions:{tabBarLabel:'Favorites!'}}
}, {
    tabBarOptions:{
        activeTintColor : Colors.primary,
    }
});

export default createAppContainer(MealsFavTaNavigator);