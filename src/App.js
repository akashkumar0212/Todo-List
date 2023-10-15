import React, { useState } from 'react'
import ToDoLists from './ToDoLists';
import './App.css';



const App = () => {

  const [inputList, setinputList] = useState("");

  const [Items, setItems] = useState([]);

  const inputEvent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setinputList("");
  }
  const deleteItems = (id) =>{
    console.log("deleted")

    setItems((oldItems) => {
      return oldItems.filter((arrElm, index) =>{
        return index !== id;
      })
    })
}
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo list</h1>
          <br />
          <input type="text" placeholder='Add a item'
            value={inputList}
            onChange={inputEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}

            {Items.map((itemval, index) => {
              return <ToDoLists
                key={index}
                id={index}
                text={itemval} 
                onSelect={deleteItems}
                />;
            })}
          </ol>

        </div>
      </div>

    </>
  )
}

export default App;
