import React from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', priority:'' };

      this.handleChange = this.handleChange.bind(this);
      this.handleChangePr = this.handleChangePr.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
                What needs to be done?
            </label>
            <input
                id="text-todo"
                onChange={this.handleChange}
                value={this.state.text}
            />

            <input
                id="priority-todo"
                value={this.state.priority}
                onChange={this.handleChangePr}
            />
            <button onClick={this.handleSubmit}>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleChangePr(e) {
      this.setState({ priority: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: new Date().toLocaleString()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: ''
      }));
    }
  }