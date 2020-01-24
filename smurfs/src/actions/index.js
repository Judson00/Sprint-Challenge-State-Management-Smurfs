//actions index

import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const fetchSmurf = () => {
  dispatchEvent({
    type: FETCHING_SMURFS_START
  });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res.data)
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