import React  from "react";
import "./App.css";
import Smurfs from './Smurfs';
import AddSmurf from "./Form";

const App = () => {
  return (
    <div className = 'App'>
      <h1>Smurfs</h1>
      <Smurfs />
      <AddSmurf />
    </div>
  )
}


export default App;
