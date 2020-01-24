//Smurfs component

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import Loader from 'react-loader-spinner';

const Smurfs = props => {
  console.log("Smurfs.jsx line 9", props);
  //useEffect(() => {props.fetchSmurf()}, [dispatch])
  return(
    <div>
      {!props.name && props.isLoading && (
        <h2>Find a Smurf</h2>
      )}
      {props.isLoading && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      )}
      <button onClick={() => props.fetchSmurf()}>Get a Smurf</button>
      {/* {
        props.name
          &&
        !props.isLoading
          && */}
        <div>
          {props.smurfs.map(smurf => {
            return (
              <div>
                <h2>{`Name: ${smurf.name}`}</h2>
                <h2>{`Age: ${smurf.age}`}</h2>
                <h2>{`Height: ${smurf.height}`}</h2>
              </div>
            )
          })}
        </div>

      //}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return{
    isLoading: state.isLoading,
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(Smurfs);