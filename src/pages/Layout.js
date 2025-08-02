import { Outlet, Link } from "react-router-dom";
import './TodosApp.css'
const Layout=()=>{
    return (
        <>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to='/'>All Todos</Link> 
                    </li> 
                    <li>
                        <Link to='/complete-todos'>Completed Todos</Link>
                    </li>
                    <li>
                        <Link to='/incomplete-todos'>Incomplete Todos</Link>
                    </li>   
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}


export default Layout