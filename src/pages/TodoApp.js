import { useState,useEffect } from "react"
import initialTodos from "./TodosData"
import './TodosApp.css'
const TodoApp=()=>{
    const [todos,setTodos]=useState(
        ()=>{
            try {
                const storedTodos=sessionStorage.getItem('myTodos')
                return storedTodos?JSON.parse(storedTodos):initialTodos
            } catch (error) {
                console.error("Error parsing session storage data:", error);
                return initialTodos; 
            }
        }
    )

    useEffect(()=>{
        try {
            sessionStorage.setItem('myTodos',JSON.stringify(initialTodos))
        } catch (error) {
            console.error("Error saving to session storage:", error);
        }
    },[todos])

    const addTodo=(taskName,description)=>{
        console.log({taskName,description});
        
        const newTodo = {
            id: String(todos.length + 1),
            taskName,
            description,
            isCompleted: false,
            dueDate: new Date().toISOString().slice(0, 10),
            priority: 'Medium',
            category: 'General',
            tags: []
        };

        setTodos([...todos,newTodo])
    }

    const toggleTodoCompletion=(id)=>{
        setTodos(todos.map(todo=>
            todo.id===id?{...todo, isCompleted:!todo.isCompleted}:todo
        ));
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    }
    
    const handSubmit=(e)=>{
        e.preventDefault()
        const taskInput = e.target.elements.taskName;
        const descInput = e.target.elements.description;
        console.log(taskInput.value);
        if(taskInput.value.trim()){
            addTodo(taskInput.value.trim(), descInput.value.trim())
            taskInput.value=''
            descInput.value=''
        }
    }

    return (
    <div className="todo-container">
      <h1>My Session-Persisted Todos</h1>

      <form className="add-todo-form" onSubmit={handSubmit}>
        <input name="taskName" type="text" placeholder="New task name" />
        <input name="description" type="text" placeholder="Description (optional)" />
        <button type="submit">Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
            data-priority={todo.priority} 
          >
            <div className="todo-item-content">
              <span className="todo-item-name">{todo.taskName}</span>
              {todo.description && <span className="todo-item-description">{todo.description}</span>}
              <span className="todo-item-meta">
                Due: {todo.dueDate} | Priority: {todo.priority} | Category: {todo.category}
              </span>
            </div>
            <button onClick={() => toggleTodoCompletion(todo.id)}>
              {todo.isCompleted ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    )
}
export default TodoApp