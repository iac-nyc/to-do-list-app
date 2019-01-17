// Libs
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// CSS
import './css/style.css';

// Component
class TodoList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      names: [
        { name: 'Buy Grocery' },
        { name: 'Clean House' },
        { name: 'Laundry' },
        { name: 'Clean up the email inbox' },
        { name: 'Read a Book'},
        { name: 'Netflix Binge-watch in the weekend'}
      ]
    }
  }

  handleChange(event) {
    if(event.key == 'Enter') {
      let newName = { name: event.target.value }
      let newNames = this.state.names.concat(newName);
      event.target.value = '';
      this.setState({ names: newNames });
    }
  }

  handleRemove(i) {
    var newNames = this.state.names;
    newNames.splice(i, 1);
    this.setState({ names: newNames });
  }

  render() {
    let Todos = this.state.names.map((name, i) => (
      <li key={name.name}>
        {name.name}
        <button onClick={this.handleRemove.bind(this, i)}>Remove</button>
      </li>
    ));

    return (
      <div className="todo-list">
        <h1>To do List</h1>
        <p> < / > <p/>
        <p> Iftekhar Ahmad Chowdhury </p>
        <p> New York, NY </p>
        <p> < / > <p/>

        <input type="text" placeholder="Add an item to the list" value={this.state.newName} onKeyDown={this.handleChange.bind(this)} />
        <ReactCSSTransitionGroup
          component="ul"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}>

          {Todos}

        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

render(
  <TodoList />,
  document.getElementById('root')
);
