import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";
import UpdateUser from "../UpdateAndDelete";



function UserProfile() {
    const { id } = useParams();
    const navigate = useNavigate
    // const {theme, setTheme} = useContext(ThemeContext);
    const [user, setUser] = useState("");
  
    useEffect(() => {
        const getUser = async () => {
            const token = await localStorage.getItem("token");
            const res = await axios.get(`http://localhost:2314/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(res.data);
        };
        getUser();
    }, []);

    const deleteUser = async () => {
        const res = await axios.delete(`http://localhost:2314/users/${id}`)

        navigate("/sign-up")
    }
    
    return(
        <>
            <h1>My name is {name}</h1>
            
            <Link to="/">Log out</Link>

            {/* <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{
                width:"fit-content",
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff"
            }}>
                Current Theme = {theme}
            </button><br /> */}
            <div>User Name: {user.name}</div>
            <div>User Email: {user.email}</div>
            <div>User role: {user.role}</div>

            <Link to={`/update/${id}`}>
              <button>Update User</button>
            </Link>

            <button onClick={deleteUser}>Delete User</button>
        </>
    )
}

export default UserProfile