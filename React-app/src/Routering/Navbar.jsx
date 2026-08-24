import { Link, NavLink } from "react-router-dom"

function Navbar(){
    return (
        <nav>
            <NavLink to='/' className="link"> Home</NavLink>
            <NavLink to='/count' className="link">Count</NavLink>
            <Link to='/about' className="link">About</Link>
            <Link to= '/users' className="link">Users</Link>
            <Link to= '/classComponent' className="link">Class</Link>
        </nav>
    );
}

export default Navbar