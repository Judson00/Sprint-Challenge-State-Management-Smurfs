//Smurfs component

import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import Loader from 'react-loader-spinner';

const Smurfs = props => {
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
        timeout={3000}
      />
      )}

      <button 
        onClick={() => props.fetchSmurf()}>Get a Smurf</button>

        {props.smurfs
          &&
        !props.isLoading
          &&
        <div>
          {props.smurfs.map(smurf => {
            return (
              <div>
                <h2>{`Name: ${smurf.name}`}</h2>
                <h2>{`Age: ${smurf.age}`}</h2>
                <h2>{`Height: ${smurf.height}`}</h2>
              </div>//line 32 closing div
            )
          })}
        </div>//line 29 closing div
      }

    </div>//line 10 closing div
  )
}

const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(Smurfs);