import React, {useState} from "react";
import ToDoItem from "./ToDoItem"
function App() {

  const [inputItem, setInputItem] = useState("");
  const [inputArray, setinputArray] = useState([]);
  function handleChange(event){
    setInputItem(event.target.value);
  }
  function addItem(){
    setinputArray(prevValue =>{
      return [...prevValue, inputItem];
    });
    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputItem} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputArray.map((arrayItem) => {
            return  <ToDoItem text = {arrayItem} />
            })} 
        </ul>
      </div>
    </div>
  );
}

export default App;
