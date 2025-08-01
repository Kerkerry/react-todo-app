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

    const [newTodoTaskName, setNewTodoTaskName] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [newTodoPriority, setNewTodoPriority] = useState('Medium'); // Default to Medium
    const [newTodoCategory, setNewTodoCategory] = useState('General'); // NEW STATE: Default to General


    useEffect(()=>{
        try {
            sessionStorage.setItem('myTodos',JSON.stringify(initialTodos))
        } catch (error) {
            console.error("Error saving to session storage:", error);
        }
    },[todos])

    const addTodo=(taskName,description, priority, category)=>{       
        const newTodo = {
            id: String(todos.length + 1),
            taskName,
            description,
            isCompleted: false,
            dueDate: new Date().toISOString().slice(0, 10),
            priority: priority,
            category:category,
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

    // Define available options
    const priorityOptions = ['High', 'Medium', 'Low'];
    const categoryOptions = ['General', 'Work', 'Personal', 'Shopping', 'Health', 'Learning']; // NEW: Categories

    return (
    <div className="todo-container">
      <h1>My Session-Persisted Todos</h1>

      <form className="add-todo-form" onSubmit={(e) => {
        e.preventDefault();
        if (newTodoTaskName.trim()) { // Check if task name is not empty
          // MODIFIED: Pass all form states to addTodo
          addTodo(newTodoTaskName.trim(), newTodoDescription.trim(), newTodoPriority, newTodoCategory);
          // Reset form fields
          setNewTodoTaskName('');
          setNewTodoDescription('');
          setNewTodoPriority('Medium');
          setNewTodoCategory('General');
        }
      }}>
        <input
          name="taskName"
          type="text"
          placeholder="New task name"
          value={newTodoTaskName}
          onChange={(e) => setNewTodoTaskName(e.target.value)}
        />
        <input
          name="description"
          type="text"
          placeholder="Description (optional)"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />

        {/* Priority Selector */}
        <select
          name="priority"
          value={newTodoPriority}
          onChange={(e) => setNewTodoPriority(e.target.value)}
          className="form-select" 
        >
          {priorityOptions.map(option => (
            <option key={option} value={option}>{option} Priority</option>
          ))}
        </select>

        {/* NEW: Category Selector */}
        <select
          name="category"
          value={newTodoCategory}
          onChange={(e) => setNewTodoCategory(e.target.value)}
          className="form-select" 
        >
          {categoryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

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
            {/* <button onClick={() => toggleTodoCompletion(todo.id)}>
              {todo.isCompleted ? 'Unmark' : 'Complete'}
            </button> */}
            <input type="checkbox" className="todo-checkbox" checked={todo.isCompleted} onChange={() => toggleTodoCompletion(todo.id)}/>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p className="info-text">
        This data will persist as long as this browser tab is open. If you close and reopen this tab, the data will be reset. Refreshing the page will retain the data.
      </p>
    </div>
    );
}
export default TodoApp