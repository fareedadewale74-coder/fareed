import { useEffect, useState } from 'react';
import './App.css';
import UserProfile from './Routering/UserProfile';
import Login from './StateManagement/Login';
import Count from './StateManagement/Count'
import About from './Routering/About';
import Contact from './Routering/Contact';
import Navbar from './Routering/Navbar';
import Users from './Hooks/Users';
import SignUp from "./SignUp"
import { Route, Routes } from 'react-router-dom';
import ClassCounter from './Class';
import UpdateUser from './UpdateAndDelete';

function App() {

  const [newTheme, setNewTheme] = useState("light");

  useEffect(() => {
    document.body.className = newTheme;
  }, [newTheme]);



  return (
    <>
      <button onClick={() => setNewTheme(newTheme === "light" ? "dark" : "light")}
        style={{ width: "fit-content" }}>Toggle Theme</button>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/count' element={<Count />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<UserProfile />} />
        <Route path='/users' element={<Users />} />
        <Route path='/classComponent' element={<ClassCounter />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>

    </>
  );
}

export default App
