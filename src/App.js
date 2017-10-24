import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  submitTodo() {
    axios
      .post('/api/todos', { todo: this.state.input })
      .then(res => {
        this.setState({ todos: res.data, input: '' });
      })
      .catch(console.log);
  }
  componentDidMount() {
    axios
      .get('/api/todos')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(console.log);
  }
  render() {
    const todos = this.state.todos.map((cur, id) => <p key={id}>{cur}</p>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input onChange={e => this.handleChange(e)} />
          <button onClick={this.submitTodo}>Submit</button>
        </p>
        {todos}
      </div>
    );
  }
}

export default App;
