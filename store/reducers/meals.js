import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};
const mealsReducer = (state = initialState, action) => {

    switch(action.type){
        case TOGGLE_FAVORITE:
            const index = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
            if(index >= 0){
                let updatedFavoriteMeals = [...state.favoriteMeals];  // copy array
                updatedFavoriteMeals.splice(index, 1);   //remove index ref to the mealId
                return {...state, favoriteMeals: updatedFavoriteMeals}  // overwrite favoriteMeals at the state
            }else{
                const meal = state.meals.find( (meal) => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}  // overwrite favoriteMeals at the state
            }
        default:
            return state;
    }
    return state;
}

export default mealsReducer;