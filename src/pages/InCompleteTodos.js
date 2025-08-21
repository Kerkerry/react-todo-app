
import './TodosApp.css'
const InCompletedTodos=({ todos, toggleTodo, deleteTodo })=>{
  const incompletetodos=todos.filter(todo=>todo.is_completed===false)
    return (
    <div className="todo-container">
      <h1>Incomplete Todos</h1>
      <ul className="todo-list">
        {incompletetodos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.is_completed ? 'completed' : ''}`}
            data-priority={todo.priority}
          >
            <div class="todo-item-header">
              <h3 class="todo-item-name">{todo.task_name}</h3>
              <div class="todo-item-actions">
                <input
                  type="checkbox"
                  class="todo-checkbox"
                  checked={todo.is_completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <button class="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
            
            <div class="todo-item-details">
              <p class="todo-item-description">{todo.description}</p>
              <div class="todo-item-meta">
                <span class="meta-info">Due: {todo.due_date}</span>
                <span class="meta-info">Priority: {todo.priority}</span>
                <span class="meta-info">Category: {todo.category}</span>
              </div>
            </div>

            <div class="todo-item-tags">
              {todo.tags.map(tag=><span class="tag">{tag}</span>)}
            </div>
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