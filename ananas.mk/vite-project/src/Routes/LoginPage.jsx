import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [isLoggedin, setIsLoggedin] = useState(false);


  const handleSubmit = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/')
  }


  {/*
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(username, password);
    const userData = {
        username,
        password,
    };
    localStorage.setItem(
        "token-info",
        JSON.stringify(userData),
        navigate('/')
    );
    //setIsLoggedin(true);
    setUsername("");
    setPassword("");
*/}

  

  






  return (
    <div className="flex items-center justify-center h-[90vh] w-screen">

      <div className="w-1/4 h-4/5 bg-gray-200  p-8  rounded-lg shadow-lg">
        <h2 className='text-3xl font-bold'>Најави се</h2>
        <p className='text-sm pt-1'>Немаш Ананас  профил <span className='text-orange-500 cursor-pointer'>Регистрирај се</span></p>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}


          placeholder="Username"
          className='border border-orange-400 outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2'
          type="text" />

        <input
          value ={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='border  border-orange-400  outline-none w-full mt-4 py-2 rounded-md placeholder:pl-2'
          type="password" />

        <button onClick={handleSubmit} className="bg-orange-500 w-full py-2 text-white text-xl rounded-md mt-6">Најави се</button>


      </div>

    </div>
  )
}

export default LoginPage