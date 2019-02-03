import { combineReducers } from 'redux'
import datas from './datas'
import activeData from './activeDatas'

//1-obs: two props is created to take place to both imported container-files
const reducersData = combineReducers({
   datas: datas,
   //this object users in here represents
   // the array with all users in the file collection or reducer-users.js
   activeData: activeData

});

//2-will export all the collections to the big sky-data-storage
export default reducersData;
