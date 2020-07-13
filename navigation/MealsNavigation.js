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
import MealsDetailScreen from '../screens/MealsDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: {  //since this is the first, it will read as the inital route
        screen:CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                headerTintColor: Platform.OS === 'android' ? '' : Colors.primary
            }
        }
    }, 
    CategoryMeals: CategoriesMealsScreen,
    MealDetail: MealsDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.secondary : '',
            headerTintColor: Platform.OS === 'android' ? '' : Colors.secondary
        }
    },
});

export default createAppContainer(MealsNavigator);