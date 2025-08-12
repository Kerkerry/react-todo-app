import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./AuthContext";
import TodoApp from "./pages/TodoApp";
import CompletedTodos from "./pages/CompletedTodos";
import InCompletedTodos from "./pages/InCompleteTodos";
import Page404 from "./pages/404";
import { useEffect, useState } from 'react';
import { api } from './AuthContext';

const App = () => {
    const [todos,setTodos]=useState([])
    const [token,setToken]=useState(()=>localStorage.getItem('token'))

    const fetchTodos=async()=>{
        try {
           const {todos}=await api.get('/',token) 
           setTodos(todos)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchTodos()
    },[todos])
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp/>} />

                    {/* Private Routes - All routes nested here are protected */}
                    <Route path="/todo-app" element={<PrivateRoute />}>
                        {/* The <Layout/> component will render for all nested routes.
                          The child routes will render inside the <Layout/>'s <Outlet />.
                        */}
                        <Route element={<Layout />}>
                            {/* The index route renders for /todo-app */}
                            <Route index element={<TodoApp  todos={todos}/>} />
                            
                            {/* Note the paths are relative, e.g., /todo-app/complete-todos */}
                            <Route path="complete-todos" element={<CompletedTodos />} />
                            <Route path="incomplete-todos" element={<InCompletedTodos />} />
                        </Route>
                    </Route>

                    {/* Catch-all route should be the last route and is public */}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;

