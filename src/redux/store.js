import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import searchCardsReducer from './searchCardsRedux';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';


const subReducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchData: searchCardsReducer
}

const reducer = combineReducers(subReducers);


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;