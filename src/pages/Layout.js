import { Outlet, NavLink } from "react-router-dom";
import './TodosApp.css'
const Layout=()=>{
    return (
        <>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to='/all-todos' className={({ isActive }) => isActive ? 'active' : ''}>All Todos</NavLink> 
                    </li> 
                    <li>
                        <NavLink to='/complete-todos' className={({ isActive }) => isActive ? 'active' : ''}>Completed Todos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/incomplete-todos' className={({ isActive }) => isActive ? 'active' : ''}>Incomplete Todos</NavLink>
                    </li>    
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}


export default Layout