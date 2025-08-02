import ReactDOM from 'react-dom/client';
import TodoApp from './pages/TodoApp';
import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletedTodos from './pages/CompletedTodos';
import Layout from './pages/Layout';
import InCompleteTodos from './pages/IncompleteTodos';
import Page404 from './pages/404';
import initialTodos from './pages/data/TodosData';

export default function App(){
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoApp todos={todos} addTodo={addTodo} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
          <Route path="complete-todos" element={<CompletedTodos todos={todos.filter(todo=>todo.isCompleted)} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
          <Route path="incomplete-todos" element={<InCompleteTodos todos={todos.filter(todo=>!todo.isCompleted)} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
          <Route path='*' element={<Page404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
