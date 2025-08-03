import ReactDOM from 'react-dom/client';
import TodoApp from './pages/TodoApp';
import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletedTodos from './pages/CompletedTodos';
import Layout from './pages/Layout';
import InCompleteTodos from './pages/InCompleteTodos';
import Page404 from './pages/404';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function  App(){
    const [todos,setTodos]=useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
          fetch('http://localhost:3100')
                .then((res)=>res.json())
                    .then((todos)=>setTodos(todos))
                        .catch((e)=>console.error(`Error retrieving todos: ${e}`))
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
        fetch(
                'http://localhost:3100/add-todo',
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newTodo),
                }
            )
                .then(res=>console.log(res))
                    .catch(e=>console.error(e))
    }

    const toggleTodoCompletion=(id)=>{
        const todoToToggle = todos.find(todo => todo.id === id);
        if (!todoToToggle) return;
        fetch(
            `http://localhost:3100/toggle-todo/${id}`,
                {
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ todo:JSON.stringify(todoToToggle)}), 
                })
                    .then(res=>console.log(res))
                        .catch(err=>console.error(err))
    }

    const deleteTodo=(id)=>{
        fetch(
            `http://localhost:3100/delete-todo/${id}`,
            {
                method:'DELETE',
            }
        )
        .then((res)=>console.log(res))
            .catch(err=>console.error(err))
    }

    // if (!isAuthenticated) {
    //     return (
    //     <Routes>
    //         <Route path="/signin" element={<SignIn />} />
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route path="*" element={<SignIn/>} />
    //     </Routes>
    //     );
    // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoApp todos={todos} addTodo={addTodo} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
          <Route path="complete-todos" element={<CompletedTodos todos={todos.filter(todo=>todo.is_completed)} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
          <Route path="incomplete-todos" element={<InCompleteTodos todos={todos.filter(todo=>!todo.is_completed)} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
          <Route path='*' element={<Page404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
