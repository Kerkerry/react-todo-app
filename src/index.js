import ReactDOM from 'react-dom/client';
import TodoApp from './pages/TodoApp';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>
);
