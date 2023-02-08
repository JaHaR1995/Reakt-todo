import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos"> 
      {props.todo.map((elem, index) => {
        return <Todo todo={elem} index={index} makeFavorite={props.makeFavorite} removeTodo={props.removeTodo}/>  ; 
      })}
    </div>
  );
};

export default Todos; 
