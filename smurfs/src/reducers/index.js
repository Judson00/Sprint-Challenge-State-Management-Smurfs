//reducers index

import { 
  FETCHING_SMURFS_START, 
  FETCHING_SMURFS_SUCCESS 
} from '../actions';

const initialState = {
  isLoading: false,
  name: "",
  age: null,
  height: null,
  id: null,
  error: ""
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
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height,
          id: action.payload.id
        }
    default:
      console.log(state);
      return state;
  }
}