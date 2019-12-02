import React from "react";

const item = ({ text, isCompleted, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: isCompleted ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

export default item;