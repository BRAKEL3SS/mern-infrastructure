import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function Navbar({ user, setUser }) {
    function handleLogOut() {
        //Delegate to the user-service
        userService.logOut()
        //update state will also cause a re-render
        setUser(null)
    }

    return (
        <nav>
            <span>Welcome, {user.name} </span>
            &nbsp; | &nbsp;
            <Link to="/orders">Order history | </Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}