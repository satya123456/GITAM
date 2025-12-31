import {combineReducers} from 'redux'
import profileReducer from './profileReducer'
import contactReducer from './contactReducer'

// redux store only interacts with this and not directly with outer 
// reducers
const rootReducer = combineReducers({
    "profile": profileReducer,
    "contacts": contactReducer
});

export default rootReducer;