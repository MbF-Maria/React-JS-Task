import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser,apiRequest } from './actions/user-action';

import { createSelector } from 'reselect';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser(event.target.value);
  }

  render(){
    console.log(this.props)
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>simple redux Setup</h1>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
);

const userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products,user) => ({
    products,
    user
  })
);

const mapActionToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};


export default connect(mapStateToProps,mapActionToProps)(App);