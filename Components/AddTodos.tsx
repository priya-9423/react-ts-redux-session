import React from "react";

export default function AddTodos(props) {
  let inputHandler;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!inputHandler.value.trim()) {
          return;
        } else {
          props.onSubmitItem(inputHandler.value);
          inputHandler.value = null;
        }
      }}
    >
      <input type="text" ref={node => (inputHandler = node)} />
      <button type="submit" onClick={props.onClickButton}>
        Add
      </button>
    </form>
  );
}
