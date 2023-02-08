import React from "react";

const Form = (props) => {
  return (
    <div className="Form">
      <input
        type="text"
        placeholder="Введите текст"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={props.addTodo}>Добавить</button>
    </div> 
  );
};

export default Form;
