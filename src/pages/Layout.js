import { Outlet, Link } from "react-router-dom";
import './TodosApp.css'
const Layout=()=>{
    return (
        <>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to='/' className={({ isActive }) => isActive ? 'active' : ''}>All Todos</Link> 
                    </li> 
                    <li>
                        <Link to='/complete-todos' className={({ isActive }) => isActive ? 'active' : ''}>Completed Todos</Link>
                    </li>
                    <li>
                        <Link to='/incomplete-todos' className={({ isActive }) => isActive ? 'active' : ''}>Incomplete Todos</Link>
                    </li>   
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}


export default Layout