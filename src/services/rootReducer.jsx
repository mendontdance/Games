import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ticTacToeReducer } from './reducers/ticTacToeReducer';

const rootReducer = combineReducers({
    ticTacToe: ticTacToeReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));