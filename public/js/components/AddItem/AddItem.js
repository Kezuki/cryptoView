import React from "react";
import ReactDOM from "react-dom";

import "./AddItem.css";

export default class AddItem extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };

    this.onInputChange = (e) => {
      this.setState({
        text: e.target.value,
      });
    };
  }

  render() {
    const { onAdd } = this.props;

    return (
      <form className="d-flex add-item">
        <input
          type="text"
          className="add-item__input"
          placeholder="What need to be done?"
          onChange={this.onInputChange}
          value={this.state.text}
        />
        <span
          className="add-item__btn btn btn-success"
          onClick={() => {
            onAdd(this.state.text);
            this.state.text = "";
          }}
        >
          add
        </span>
      </form>
    );
  }
}
