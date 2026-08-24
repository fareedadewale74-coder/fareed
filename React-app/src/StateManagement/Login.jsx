import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import { useUser } from "../Context/Usercontext";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {loginUser} = useUser()

    const logIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://fareed-b6lf.onrender.com/users/login", { name, email, password });
            const token = res.data;
            setEmail("");
            setPassword("");
            const loggedInUser = await loginUser(token)
            console.log("logged in user: ", loggedInUser)

            navigate(`/user/${loggedInUser._id}`);
        } catch (err) {
            console.error(err.message)
        }
    };

    return (
        <form onSubmit={logIn} style={{ marginTop: "250px" }}>
            <input type="text" value={name} placeholder="Enter your name" onChange={
                (e) => setName(e.target.value)
            } /> <br />
            <input type="email" value={email} placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} /> <br />
            <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /> <br />
            <button type="submit" >Submit</button>
        </form>
    )
}

export default Login