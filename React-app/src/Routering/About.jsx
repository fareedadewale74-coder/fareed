import { Link } from "react-router-dom";

function About(){
    return (
    <>
        <h1>Welcome to our About page</h1>
        <Link to="/contact">Contact Page</Link>
    </>
    )
}

export default About;