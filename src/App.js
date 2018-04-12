import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

function rootReducer(state = {}, action){
  switch(action.type) {
    case 'ADD-ONE':
     return state.concat('added one')
    case 'SUBTRACT-ONE':
      return state.concat('subtracted one')
    default:
      return state
  }
}

let store = createStore(rootReducer);

class App extends Component {

  constructor(){
    super()
    store.subscribe(() => {
      console.log('subscribing to store');
      console.log(store.getState())
    });
  }

  increment() {
    console.log('in store increment method');
    store.dispatch({type:'INCREMENT', data:'added one'});
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>simple redux</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;