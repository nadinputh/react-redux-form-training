import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
    app: AppReducer,
    form: formReducer
});

export default rootReducer;