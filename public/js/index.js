import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ToDoList from "./components/ToDoList/ToDoList";
import ItemStatusFilter from "./components/ItemStatusFilter/ItemStatusFilter";
import AddItem from "./components/AddItem/AddItem";

import "./index.css";

class App extends React.Component {
  constructor() {
    super();

    this.a = 1;

    this.maxId = 100;

    this.createTodoItem = (label) => {
      return {
        label: label,
        important: false,
        done: false,
        id: this.maxId++,
      };
    };

    this.state = {
      todoData: [
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Make Awesome App"),
        this.createTodoItem("Have a lunch"),
      ],
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const bef = todoData.slice(0, idx);
        const af = todoData.slice(idx + 1);

        return { todoData: [...bef, ...af] };
      });
    };

    this.addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];

        return {
          todoData: newArr,
        };
      });
    };

    this.toggleState = ({ todoData }, id, action) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];


      // spred оператор
      const newItem = { ...oldItem, [action]: !oldItem[action] };

      const bef = todoData.slice(0, idx);
      const af = todoData.slice(idx + 1);

      return { todoData: [...bef, newItem, ...af] };
    };

    this.onToggleImportant = (id) => {
      this.setState((props) => {
        return this.toggleState(props, id, "important");
      });
    };

    this.onToggleDone = (id) => {
      this.setState((props) => {
        return this.toggleState(props, id, "done");
      });
    };
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <ToDoList
          todos={this.state.todoData}
          onDeleted={(id) => {
            this.deleteItem(id);
          }}
          onToggleDone={(id) => {
            this.onToggleDone(id);
          }}
          onToggleImportant={(id) => {
            this.onToggleImportant(id);
          }}
        />

        <AddItem
          onAdd={(text) => {
            this.addItem(text);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
