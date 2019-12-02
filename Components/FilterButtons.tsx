import React from "react";

export default function FilterButtons(props) {
  return (
    <button
      name={props.name}
      className={
        props.filter == props.name
          ? "btn btn-primary btn-space"
          : "btn btn-secondary btn-space"
      }
      onClick={() => props.onClick(props.name)}
      style={{margin:10}}
    >
      {props.value}
    </button>
  );
}
