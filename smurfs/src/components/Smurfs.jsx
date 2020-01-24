//Smurfs component

import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import Loader from 'react-loader-spinner';

const Price = props => {
  return(
    <div>
      {!props.smurf && props.isLoading && (
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
      <button onClick={props.fetchSmurf}>Get a Smurf</button>
      {
        props.smurf
          &&
        !props.isLoading
          &&
        <div>
          <h2>{`Name: ${props.name}`}</h2>
          <h2>{`Age: ${props.age}`}</h2>
          <h2>{`Height: ${props.height}`}</h2>
        </div>

      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return{
    isLoading: state.isLoading,
    name: state.name,
    age: state.age,
    height: state.height,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(Price);