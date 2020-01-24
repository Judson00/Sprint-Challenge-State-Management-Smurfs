//reducers index

const initialState = {
  isLoading: false,
  age: null,
  height: null,
  id: 0
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      console.log(state);
      return state;
  }
}