import * as actionTypes from '../actions/actionType';

export default function contactReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, 
        Object.assign({}, action.contact),
      ];
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
}
// we have not mutated the state directly 
// instead we have returned a new state.

// So, the new state is 
// original state array + new contact data and returns a new collection.