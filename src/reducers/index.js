import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//combineReducers allows easily work with several Reducers
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

//console.log(store.getState());
//Expect an empty array
//{ libraries: [] }