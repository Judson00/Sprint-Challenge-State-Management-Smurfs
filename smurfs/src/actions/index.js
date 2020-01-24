//actions index

import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export const fetchSmurf = () => {
  return dispatchEvent => {
    dispatchEvent({
      type: FETCHING_SMURFS_START
    })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatchEvent({
        type: FETCHING_SMURFS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatchEvent({
        type: FETCHING_SMURFS_FAILURE,
        payload: err.response
      })
    })
  }
}

export const addSmurf = newSmurf => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs/`, newSmurf)
    .then(res => dispatch(
      { 
        type: ADD_NEW_SMURF,
        payLoad: res.data
      })
    )
}