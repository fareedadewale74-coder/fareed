import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useParams, useNavigate } from "react-router-dom";

function updateUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [ role, setRole] = useState("");
    const [error, setError] = useState("")

    const updateById = async (e) => {
        e.preventDefault();
        
        try {
            if (!name && !password && !role) return alert ("fill your credential");
            const token = localStorage.getItem("token");
            const res = await axios.put(`https://fareed-b6lf.onrender.com/users/${id}`,{
                name,
                password,
                role,
            });
            navigate(`/user/${id}`);
        } catch (err) {
            console.error(err.message);
            setError(err.message)
        }

        if (error) return <h2>{error}</h2>
    }

    return (
        <>
        <form onSubmit={updateById}>
            <input type="name" 
            placeholder="update your Name"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
            <input type="password" 
            placeholder="update your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <input type="text" 
            placeholder="update your role"
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            />
            <button type="submit">update</button>
        </form>
        </>
    )
}

export default updateUser;
