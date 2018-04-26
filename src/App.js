import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      title: '',
      body:'',
      id:'',
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        this.setState({title:data.title,body:data.body,id:data.id})
        console.log(data)
      });
  }

  render() {
    const { title,body,id } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-homescreen">
          <h1> Title : {title}</h1>
          <p>Subject : {body}</p>
          <p>Id : {id}</p>
        </div>
      </div>
    );
  }
}

export default App;