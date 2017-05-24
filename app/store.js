/**
 * Created by yaelo on 4/12/17.
 */
import { createStore, combineReducers } from 'redux';

import testReducer from './reducers/testReducer';
import eyeReducer from './reducers/eyeReducer';

const reducer = combineReducers({
  testReducer,
  eyeReducer
});

const store = createStore(reducer);

export default store;
