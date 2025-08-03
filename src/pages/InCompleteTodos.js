
import './TodosApp.css'
const InCompletedTodos=({ todos, toggleTodoCompletion, deleteTodo })=>{
    return (
    <div className="todo-container">
      <h1>Incomplete Todos</h1>
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
                Due: {todo.dueDate} | Priority: {todo.priority} | Category: {todo.category}
              </span>
            </div>
            {/* <button onClick={() => toggleTodoCompletion(todo.id)}>
              {todo.isCompleted ? 'Unmark' : 'Complete'}
            </button> */}
            <input type="checkbox" className="todo-checkbox" checked={todo.is_completed} onChange={() => toggleTodoCompletion(todo.id)}/>
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
export default InCompletedTodos