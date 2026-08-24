import { useEffect, useState } from "react";
import { useUser } from "../Context/Usercontext";
// import axios from "axios"
function users() {
    const { users, loading, getUsers} = useUser()


    useEffect(() => {
        const allUsers = async () => {
            try {
                const token = localStorage.getItem("token")
                await getUsers(token)
            } catch (err) {
                console.error(err.message);
            };
        }
        allUsers()
    }, [])

    if (loading) return <p>loading...</p>

    return (
        <>
        <div>
            <table style={{ borderCollapse: "separate", borderSpacing: "15px 10px"}}>
                <thead style={{ textAlign: "left"}}>
<tr>
    <th>name</th>
    <th>email</th>
    <th>role</th>
</tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}


export default users