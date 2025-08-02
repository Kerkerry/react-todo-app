import ReactDOM from 'react-dom/client';
import TodoApp from './pages/TodoApp';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletedTodos from './pages/CompletedTodos';
import Layout from './pages/Layout';
import InCompleteTodos from './pages/IncompleteTodos';
import Page404 from './pages/404';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoApp/>}/>
          <Route path="complete-todos" element={<CompletedTodos/>}/>
          <Route path="incomplete-todos" element={<InCompleteTodos/>}/>
          <Route path='*' element={<Page404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
