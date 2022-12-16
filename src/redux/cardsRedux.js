import uuid from "react-uuid";
import { strContains } from "../utils/strContains";


//selectors
export const getFilteredCards = ({ cards, searchData }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchData));
export const getFavoriteCards = ({cards}) => cards.filter( card => card.isFavorite === true );


// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const ADD_TO_FAVORITE = createActionName('ADD_TO_FAVORITE');


// action creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });
export const addToFavorite = (payload) => ({ type: ADD_TO_FAVORITE, payload });


const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { id: uuid(), ...action.payload }];
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    case ADD_TO_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
};

export default cardsReducer;