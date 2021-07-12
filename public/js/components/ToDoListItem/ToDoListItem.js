import React from "react";
import "./ToDoListItem.css";

export default class ToDoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        };

        /*  this.onLabelClick = () => {
      this.setState((state) => {
        return { done: !state.done };
      });
    };

    this.onMarkImportant = () => {
      this.setState((state) => {
        return { important: !state.important };
      });
    }; */
    }

    render() {
        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            done,
            important,
        } = this.props;

        let clazz = "todo-list-item";

        if (done) {
            clazz += " done";
        }

        if (important) {
            clazz += " important";
        }

        return (
            <span className={clazz}>
                <span className="todo-list-item-label" onClick={onToggleDone}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-success btn-sm float-right"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
