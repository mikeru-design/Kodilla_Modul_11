//selectors
export const getSearchData = (state) => (state.searchData);


// actions
const createActionName = actionName => `app/searchCards/${actionName}`;
const SEARCH_CARDS = createActionName('SEARCH_CARDS');


// action creators
export const searchCards = (payload) => ({ type: SEARCH_CARDS, payload });

const searchCardsReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH_CARDS:
      return action.payload
    default:
      return statePart;
  }
};

export default searchCardsReducer;