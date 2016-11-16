import React, { Component } from 'react';
// import './App.css';

class TodoItems extends Component {
  render() {
    let todoEntries = this.props.entries

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
// We are using the map function to iterate over every item inside todoEntries and call the createTasks function
    let listItems = todoEntries.map(createTasks)

    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  addItem(e) {
    let itemArray = this.state.items
      itemArray.push(
        {
          text: this._inputElement.value,
          // key value be unique for every entry that gets submitted. Will use to uniquely idenfity each generated UI element
          key: Date.now()
        }
      )
      // this state for addItem method is now item: itemArray
    this.setState({
      items: itemArray
    })

    this._inputElement.value = ""
    // to ovverride the default onSubmit event
    // so when we submit, only the addItm method is called, not the default POST behavior
    e.preventDefault()
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>Todo.ly</h1>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                    placeholder="enter task"></input>
            <button type="submit">add!</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    )
  }
}

export default TodoList;
