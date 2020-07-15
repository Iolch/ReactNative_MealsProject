import React from 'react';
import {Button} from 'react-native';

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
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoriesMealsScreen,
    MealDetail: MealsDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : Colors.secondary
    },
});

const FavoritesNavigator = createStackNavigator({
    Favorites:FavoritesScreen,
    MealsFavoriteDetail:{screen: MealsDetailScreen}
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondary
    }
});

const FilterNavigator = createStackNavigator(
    {
        Filter: FilterScreen
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'black' : Colors.secondary
            
        }
    }
);
const MealsFavTaNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator},
    Favorites: {screen: FavoritesNavigator, navigationOptions:{tabBarLabel:'Favorites!'}}
}, {
    tabBarOptions:{
        activeTintColor : Colors.primary,
    }
});

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTaNavigator,
            navigationOptions:{
                drawerLabel: 'Meals',
            },
        },
        Filters: FilterNavigator,
    },{
        contentOptions:{
            activeTintColor: Colors.secondary,
            
        }
    }
);
export default createAppContainer(MainNavigator);