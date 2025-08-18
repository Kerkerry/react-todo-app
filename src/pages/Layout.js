import { Outlet, NavLink } from "react-router-dom";
import './TodosApp.css'
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import styles from './SignOutButton.module.css'
const Layout=()=>{
    const {signout}=useContext(AuthContext)

    const handleSignOut=()=>{
        signout()
    }
    return (
        <>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to='/todo-app' className={({ isActive }) => isActive ? 'active' : ''}>All Todos</NavLink> 
                    </li> 
                    <li>
                        <NavLink to='/todo-app/complete-todos' className={({ isActive }) => isActive ? 'active' : ''}>Completed Todos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/todo-app/incomplete-todos' className={({ isActive }) => isActive ? 'active' : ''}>Incomplete Todos</NavLink>
                    </li>
                    <li>
                         <button className={styles.logoutButton} onClick={handleSignOut}>Signout</button> 
                    </li>    
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}


export default Layout