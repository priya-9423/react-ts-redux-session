import { connect } from "react-redux";
import ToDos from "./Copenents/ToDoList";

function maStateToProps(state) {
  return {
    todos: state.todos.filter(todo => {
      switch (state.filter) {
        case "COMPLETED":
          return todo.completed;
        case "PENDING":
          return !todo.completed;
        default:
          return false;
      }
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: value => dispatch({ type: "MARK_COMPLETED", text: value })
  };
}

export default connect(
  null,
  mapDispatchToProps,
  maStateToProps
)(ToDos);
