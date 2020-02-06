import { MARK_AS_FAVORITE } from '../constants/ActionTypes';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
  favItems: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case MARK_AS_FAVORITE:
      return {
        favItems: [...state.favItems, action.item]
      }
      default:
        return state;
  }
}  
const store = createStore(reducer, composeWithDevTools());
export default store;

