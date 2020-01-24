//reducers index

import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS } from '../actions';

const initialState = {
  isLoading: false,
  name: null,
  age: null,
  height: null,
  id: 0
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isLoading: true
      }
      case FETCHING_SMURFS_SUCCESS:
        return{
          ...state,
          isLoading: false,
          name: action.payload,
          age: action.payload,
          height: action.payload,
          id: action.payload
        }
    default:
      console.log(state);
      return state;
  }
}