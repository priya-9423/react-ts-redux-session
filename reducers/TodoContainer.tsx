import { connect } from "react-redux";
import AddTodos from "./Copenents/AddTodos";

function mapDispatch(dispatch) {
  return {
    onSubmitItem: value => dispatch({ type: "ADD_TODO", text: value })
  };
}

export default connect(
  null,
  mapDispatch
)(AddTodos);
