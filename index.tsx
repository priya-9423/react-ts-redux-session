import { createStore } from "redux";
import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import AddTodos from "./Components/AddTodos";

import Container from "./reducers/FilterConnector";
import reducers from "./reducers";
import "./style.css";

const store = createStore(reducers);
// store.subscribe(() => console.log(this.store.getState()) )

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      todos: []
    };
  }
  //   this.store.subscribe(() => console.log(this.store.getState()));

  //   this.store.dispatch({ type: "ADD_TODO", text: "Milk" });
  //   this.store.dispatch({ type: "ADD_TODO", text: "Butter" });
  //   this.store.dispatch({ type: "SET_FILTER", visibility: "SHOW_ALL" });
  //   this.store.dispatch({ type: "MARK_COMPLETED", text: "Butter" });
  // }

  itemClicked = e => {
    console.log(e);
  };

  itemAdded = e => {
    this.setState({
      todos: [...this.state.todos, { text: e, isCompleted: false }]
    });
  };

  onClick = e => {};

  render() {
    return (
      <div>
        <Container onClick={this.onClick} />
        <AddTodos onSubmitItem={this.itemAdded} />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
