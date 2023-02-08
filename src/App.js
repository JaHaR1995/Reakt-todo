
import React, { useState } from 'react';
import './App.css';    
import Header from './Header'; 
import Form from './Form';       
import Todos from './Todos';


function App  () {

  const todos = [
    {
      text: 'Купить чипсы',
      favorite: false,
    },

    {
      text: 'Продать на авито',
      favorite: true,
    },

    {
      text: 'Выучить Реакт',
      favorite: false,
    }
  ];
  const [text, setText] =useState("")   

  const [todo, setTodos] = useState(todos)   
  const removeTodo = (indexRemovingItem) =>{
    const filtered = todo.filter((elem, index) =>{
      if(index === indexRemovingItem){
        return false 
      }
      return true 
    });
    setTodos(filtered)  
  }

  const makeFavorite =(i) =>{
    const tudus = todo.map((item, index)=>{           
     if(i === index){
      return{
        ...item,
        favorite: !item.favorite 
      } 
     }
     return item
    })
    setTodos(tudus)
  }

  const addTodo = () =>{
    setTodos([
    {
     text: text,
     favorite: false
    },                         
     ...todo

    ]);
    setText("")
  }

  return(                        
    <div className='App'>
     <Header/>
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos todo={todo} makeFavorite={makeFavorite} removeTodo={removeTodo}/> 
    </div>
  ) 
}
  


export default App;
