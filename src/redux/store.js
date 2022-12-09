import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchData }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchData));

export const getAllColumns = (state) => (state.columns);


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const searchCards = payload => ({ type: 'SEARCH_CARDS', payload });


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, action.payload]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, action.payload]};
    case 'SEARCH_CARDS':
      return {...state, searchData: action.payload};
    default :
      return state;
  }
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;