import uuid from "react-uuid";

//selectors
export const getAllLists = (state) => (state.lists);
export const getListById = ({lists}, listId) => lists.find(list => listId === list.id);


// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = (payload) => ({ type: ADD_LIST, payload });
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { id: uuid(), ...action.payload }];
    default:
      return statePart;
  };
};

export default listsReducer;
