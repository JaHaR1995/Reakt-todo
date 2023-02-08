import React from "react";

const Todo= (props) => {
   return (
    <div className={`todo ${props.todo.favorite ? 'selected': ''}`}>         
    <div className='Favorite'>
      <button onClick={() =>props.makeFavorite(props.index)}>★</button>
    </div>
    <div className='todo-text'>
      {props.todo.text}
    </div>
    <div className='actions'>
       <button onClick={() =>props.removeTodo (props.index)}>x</button>       
    </div>              
    </div>
   );
}

export default Todo 