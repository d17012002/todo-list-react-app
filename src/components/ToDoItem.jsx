import React, { useState } from "react";

function ToDoItem(props) {
  const [flag, setFlag] = useState(false);
  function changetext() {
    setFlag(prevValue => {
        return !prevValue ;
    });
  }
  return (
    <div onClick={changetext}>
      <li style={{textDecoration : (flag===true) ? "line-through" : "none"}}> {props.text}</li>
    </div>
  );
}

export default ToDoItem;
