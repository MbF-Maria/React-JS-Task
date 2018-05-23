import React, { Component } from 'react';
import map from 'lodash/map';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      details: {},
      userId:'',
      id:'',
      title: '',
      body: '',
      Subject: [],
    };
    this.userId = this.userId.bind(this);
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({title:data.title,body:data.body,id:data.id,userid:data.userId})
        this.setState({Subject: data[99]})
        console.log(this.state.Subject)
        this.setState({details: data})
      });
 }

  userId(){
    const listOfEmployee = [];
    map(this.state.details, el => { listOfEmployee.push(el.id); });
    console.log(listOfEmployee)
  }

  render() {
    const { Subject } = this.state;
    this.userId();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-homescreen">
          <h1> Name : {Subject.title}</h1>
          <p>Detail : {Subject.body}</p>
          <p>Id : {Subject.id}</p>
          <p>Employee No : {Subject.userId}</p>
        </div>
      </div>
    );
  }
}
export default App;