//that will combine all reducers or collections(users, movies etc).
//then combine them in one object named allReducers.
//first of all let's import:
//import MoviesReducer from './reducer-movies'
import{combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

//main object to save in the store.
//always add all reducers created into the main object allReducers.
//it takes each reducer like an object
const allReducers = combineReducers({
    users: UserReducer,
    //this object users in here represents
    // the array with all users in the file collection or reducer-users.js
    activeUser: ActiveUserReducer
    
    //other collection:
    //,movies:MoviesReducer,

});

//will export all the collections to the big sky-data-storage
export default allReducers;