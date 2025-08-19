import { useState } from "react"
import './TodosApp.css'
const TodoApp=({todos, addTodo, toggleTodo, deleteTodo })=>{


    const [newTodoTaskName, setNewTodoTaskName] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [newTodoPriority, setNewTodoPriority] = useState('Medium'); // Default to Medium
    const [newTodoCategory, setNewTodoCategory] = useState('General'); // NEW STATE: Default to General
    const [selectedTags,setSelectedTags]=useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedTags(prevTags => 
          checked ? [...prevTags, value] : prevTags.filter(tag => tag !== value)
        );
      };

    const handSubmit=(e)=>{
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
    }

    // Define available options
    const priorityOptions = ['High', 'Medium', 'Low'];
    const categoryOptions = ['General', 'Work', 'Personal', 'Shopping', 'Health', 'Learning']; // NEW: Categories
    const tagsOptions=['Work',
    'Personal',
    'Shopping',
    'Fitness',
    'Home',
    'Finance',
    'Study','Home','Office','Computer','Errand','Urgent', 'Waiting','Backlog','Research','Coding','Writng']
    return (
    <div className="todo-container">
      <h1>All Todos Currently</h1>

      <form className="add-todo-form" onSubmit={handSubmit}>
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
         <div className="tags-container">
            <h3>Tags</h3>
            <div className="checkbox-grid">
              {tagsOptions.map((tag, index) => (
                <div key={index} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={tag}
                    name={tag}
                    value={tag}
                    // checked={selectedTags.includes(tag)}
                    // onChange={handleCheckboxChange}
                  />
                  <label htmlFor={tag}>{tag}</label>
                </div>
              ))}
            </div>
          </div>
        <button type="submit">Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.is_completed ? 'completed' : ''}`}
            data-priority={todo.priority}
          >
            <div className="todo-item-content">
              <span className="todo-item-name">{todo.task_name}</span>
              {todo.description && <span className="todo-item-description">{todo.description}</span>}
              <span className="todo-item-meta">
                Due: {todo.due_date} | Priority: {todo.priority} | Category: {todo.category}
              </span>
            </div>
            {/* <button onClick={() => toggleTodoCompletion(todo.id)}>
              {todo.isCompleted ? 'Unmark' : 'Complete'}
            </button> */}
            <input type="checkbox" className="todo-checkbox" checked={todo.is_completed} onChange={() => toggleTodo(todo.id)}/>
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