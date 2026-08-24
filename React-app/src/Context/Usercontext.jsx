import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    const getUsers = async (token) =>  {
        try {
            const res = await axios.get(`https://fareed-b6lf.onrender.com/users`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUsers(res.data)
            return res.data
        } catch (err) {
            console.error(err.message)
        }
    }

    const getUser = async (token) => {
        try{
            const decodededToken = jwtDecode(token)

            const userID = decodededToken.id;

            if (!userID) {
                throw new Error("User Id not found in token");
            }

            const res = await axios.get(`https://fareed-b6lf.onrender.com/users/${userID}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(res.data)
            return res.data
        } catch (err) {
            console.error(err.message);
            setUser(null)
            localStorage.removeItem("token");
            throw err;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            setLoading(false)
            return
        }

        getUser(token)
        .catch(() => {
            setUser(null)
        }).finally(() => {
            setLoading(false)
        })
    }, [])


    const loginUser = async (token) => {
        try {
            localStorage.setItem("token", token) 
            const loggedInUser = await getUser(token)
            return loggedInUser
        } catch (err) {
            localStorage.removeItem("token")
            throw err 
            console.error(err.message);
        }
    };

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/")
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, setUser, users, setUsers, getUser, loginUser, logOut, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);