const initialTodos=[
  {
    "id": "1",
    "taskName": "Complete React Todo App UI",
    "description": "Design and implement the user interface for the todo application using React components and CSS.",
    "isCompleted": false,
    "dueDate": "2025-08-05",
    "priority": "High",
    "category": "Development",
    "tags": ["React", "UI/UX", "Frontend"]
  },
  {
    "id": "2",
    "taskName": "Implement Task Creation Feature",
    "description": "Develop the functionality to add new tasks, including input validation and state management.",
    "isCompleted": false,
    "dueDate": "2025-08-07",
    "priority": "High",
    "category": "Development",
    "tags": ["React", "State Management", "CRUD"]
  },
  {
    "id": "3",
    "taskName": "Set Up Backend API for Todos",
    "description": "Create a simple Node.js/Express API to handle CRUD operations for todo items.",
    "isCompleted": true,
    "dueDate": "2025-08-10",
    "priority": "Medium",
    "category": "Backend",
    "tags": ["Node.js", "Express", "API"]
  },
  {
    "id": "4",
    "taskName": "Integrate API with Frontend",
    "description": "Connect the React frontend with the newly created backend API to fetch and update todos.",
    "isCompleted": false,
    "dueDate": "2025-08-14",
    "priority": "High",
    "category": "Development",
    "tags": ["API Integration", "React", "Axios"]
  },
  {
    "id": "5",
    "taskName": "Add Task Deletion Functionality",
    "description": "Implement the feature to delete individual tasks from the list.",
    "isCompleted": true,
    "dueDate": "2025-08-08",
    "priority": "Medium",
    "category": "Development",
    "tags": ["CRUD", "React"]
  },
  {
    "id": "6",
    "taskName": "Implement Task Editing Feature",
    "description": "Allow users to edit existing task names and descriptions.",
    "isCompleted": false,
    "dueDate": "2025-08-09",
    "priority": "Medium",
    "category": "Development",
    "tags": ["CRUD", "React"]
  },
  {
    "id": "7",
    "taskName": "Add Task Completion Toggle",
    "description": "Enable users to mark tasks as completed or incomplete.",
    "isCompleted": false,
    "dueDate": "2025-08-06",
    "priority": "High",
    "category": "Development",
    "tags": ["React", "State Management"]
  },
  {
    "id": "8",
    "taskName": "Implement Due Date Selection",
    "description": "Add a date picker for selecting due dates for tasks.",
    "isCompleted": false,
    "dueDate": "2025-08-11",
    "priority": "Medium",
    "category": "Development",
    "tags": ["UI/UX", "Date Picker"]
  },
  {
    "id": "9",
    "taskName": "Develop Task Filtering Options",
    "description": "Allow filtering tasks by 'All', 'Active', and 'Completed'.",
    "isCompleted": true,
    "dueDate": "2025-08-12",
    "priority": "Medium",
    "category": "Development",
    "tags": ["Filtering", "React"]
  },
  {
    "id": "10",
    "taskName": "Create Task Priority Selector",
    "description": "Add an option to set priority levels (High, Medium, Low) for tasks.",
    "isCompleted": false,
    "dueDate": "2025-08-13",
    "priority": "Low",
    "category": "Development",
    "tags": ["UI/UX", "Prioritization"]
  },
  {
    "id": "11",
    "taskName": "Implement Local Storage Persistence",
    "description": "Store tasks in browser's local storage for offline access and data persistence.",
    "isCompleted": false,
    "dueDate": "2025-08-15",
    "priority": "Medium",
    "category": "Development",
    "tags": ["Local Storage", "Persistence"]
  },
  {
    "id": "12",
    "taskName": "Write Unit Tests for Frontend Components",
    "description": "Create unit tests for key React components (e.g., TaskItem, AddTaskForm).",
    "isCompleted": false,
    "dueDate": "2025-08-18",
    "priority": "Low",
    "category": "Testing",
    "tags": ["Jest", "React Testing Library"]
  },
  {
    "id": "13",
    "taskName": "Set Up CI/CD Pipeline",
    "description": "Configure a basic CI/CD pipeline for automated testing and deployment.",
    "isCompleted": false,
    "dueDate": "2025-08-22",
    "priority": "Low",
    "category": "DevOps",
    "tags": ["CI/CD", "GitHub Actions", "Deployment"]
  },
  {
    "id": "14",
    "taskName": "Develop Responsive Design",
    "description": "Ensure the application is fully responsive and works well on mobile devices.",
    "isCompleted": false,
    "dueDate": "2025-08-16",
    "priority": "High",
    "category": "Development",
    "tags": ["Responsive", "Mobile"]
  },
  {
    "id": "15",
    "taskName": "Create User Authentication (Optional)",
    "description": "Implement user login and registration with JWT authentication.",
    "isCompleted": false,
    "dueDate": "2025-08-25",
    "priority": "Low",
    "category": "Security",
    "tags": ["Authentication", "JWT"]
  },
  {
    "id": "16",
    "taskName": "Add Search Functionality",
    "description": "Enable users to search for tasks by keywords.",
    "isCompleted": false,
    "dueDate": "2025-08-17",
    "priority": "Medium",
    "category": "Development",
    "tags": ["Search", "Filtering"]
  },
  {
    "id": "17",
    "taskName": "Refactor Code for Readability",
    "description": "Improve code structure, add comments, and ensure consistent styling.",
    "isCompleted": false,
    "dueDate": "2025-08-20",
    "priority": "Low",
    "category": "Refactoring",
    "tags": ["Code Quality"]
  },
  {
    "id": "18",
    "taskName": "Optimize Performance",
    "description": "Analyze and improve the application's loading and rendering performance.",
    "isCompleted": true,
    "dueDate": "2025-08-23",
    "priority": "Low",
    "category": "Optimization",
    "tags": ["Performance", "React Performance"]
  },
  {
    "id": "19",
    "taskName": "Add Drag-and-Drop Task Reordering",
    "description": "Allow users to reorder tasks within the list using drag-and-drop.",
    "isCompleted": false,
    "dueDate": "2025-08-21",
    "priority": "Medium",
    "category": "Development",
    "tags": ["UI/UX", "Drag-and-Drop"]
  },
  {
    "id": "20",
    "taskName": "Implement Categories/Tags",
    "description": "Allow users to assign categories or tags to tasks for better organization.",
    "isCompleted": true,
    "dueDate": "2025-08-19",
    "priority": "Medium",
    "category": "Development",
    "tags": ["Organization", "Tags"]
  },
  {
    "id": "21",
    "taskName": "Create README.md File",
    "description": "Write a comprehensive README file with setup instructions, features, and usage guide.",
    "isCompleted": false,
    "dueDate": "2025-08-24",
    "priority": "Low",
    "category": "Documentation",
    "tags": ["Documentation"]
  },
  {
    "id": "22",
    "taskName": "Prepare for Initial Deployment",
    "description": "Set up hosting environment and prepare the application for its first deployment.",
    "isCompleted": false,
    "dueDate": "2025-08-28",
    "priority": "Medium",
    "category": "Deployment",
    "tags": ["Deployment", "Hosting"]
  },
  {
    "id": "23",
    "taskName": "Conduct User Acceptance Testing (UAT)",
    "description": "Gather feedback from a small group of users and address any issues.",
    "isCompleted": false,
    "dueDate": "2025-08-30",
    "priority": "Medium",
    "category": "Testing",
    "tags": ["UAT", "Feedback"]
  },
  {
    "id": "24",
    "taskName": "Plan Next Features/Iterations",
    "description": "Brainstorm and plan out features for future versions of the todo app.",
    "isCompleted": false,
    "dueDate": "2025-09-01",
    "priority": "Low",
    "category": "Planning",
    "tags": ["Roadmap"]
  },
  {
    "id": "25",
    "taskName": "Review Code with Peer",
    "description": "Get a peer to review the completed code for best practices and potential improvements.",
    "isCompleted": false,
    "dueDate": "2025-08-27",
    "priority": "Low",
    "category": "Code Review",
    "tags": ["Code Quality"]
  }
]

export default initialTodos










// import ReactDOM from 'react-dom/client';
// import TodoApp from './pages/TodoApp';
// import { useState,useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CompletedTodos from './pages/CompletedTodos';
// import Layout from './pages/Layout';
// import InCompleteTodos from './pages/InCompleteTodos';
// import Page404 from './pages/404';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';


// export default function  App(){
//     const [todos,setTodos]=useState([])
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(()=>{
//           fetch('http://localhost:3100')
//                 .then((res)=>res.json())
//                     .then((todos)=>setTodos(todos))
//                         .catch((e)=>console.error(`Error retrieving todos: ${e}`))
//     },[todos])

//     const addTodo=(taskName,description, priority, category)=>{       
//         const newTodo = {
//             id: String(todos.length + 1),
//             taskName,
//             description,
//             isCompleted: false,
//             dueDate: new Date().toISOString().slice(0, 10),
//             priority: priority,
//             category:category,
//             tags: []
//         };
//         fetch(
//                 'http://localhost:3100/add-todo',
//                 {
//                     method:'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(newTodo),
//                 }
//             )
//                 .then(res=>console.log(res))
//                     .catch(e=>console.error(e))
//     }

//     const toggleTodoCompletion=(id)=>{
//         const todoToToggle = todos.find(todo => todo.id === id);
//         if (!todoToToggle) return;
//         fetch(
//             `http://localhost:3100/toggle-todo/${id}`,
//                 {
//                     method:'PUT',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ todo:JSON.stringify(todoToToggle)}), 
//                 })
//                     .then(res=>console.log(res))
//                         .catch(err=>console.error(err))
//     }

//     const deleteTodo=(id)=>{
//         fetch(
//             `http://localhost:3100/delete-todo/${id}`,
//             {
//                 method:'DELETE',
//             }
//         )
//         .then((res)=>console.log(res))
//             .catch(err=>console.error(err))
//     }

//     // if (!isAuthenticated) {
//     //     return (
//     //     <Routes>
//     //         <Route path="/signin" element={<SignIn />} />
//     //         <Route path="/signup" element={<SignUp />} />
//     //         <Route path="*" element={<SignIn/>} />
//     //     </Routes>
//     //     );
//     // }

// //   return (
// //     <BrowserRouter>
// //         <Routes>
// //             <Route path="/" element={<Layout/>}>
// //             <Route index element={<TodoApp todos={todos} addTodo={addTodo} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
// //             <Route path='sign-in' element={<SignIn/>}/>
// //             <Route path='sign-up' element={<SignUp/>}/>
// //             <Route path="complete-todos" element={<CompletedTodos todos={todos.filter(todo=>todo.is_completed)} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
// //             <Route path="incomplete-todos" element={<InCompleteTodos todos={todos.filter(todo=>!todo.is_completed)} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>}/>
// //             <Route path='*' element={<Page404/>}/>
// //             </Route>
// //         </Routes>
// //     </BrowserRouter>
// //   )
// // }