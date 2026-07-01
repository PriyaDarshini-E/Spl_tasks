import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

const Login = () => {
  const navigation = useNavigate()
  const [userData, setUserdata] = useState({ Email: "", Password: ""})

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserdata({ ...userData, [name]: value });
  }

  const handleSumbit = async(e) => {
    e.preventDefault();
    try {
      const response  = await axios.post("http://localhost:3000/api/register/loginUser",userData)
      alert("Login successfully")
      navigation("/Dashboard")
      console.log("Login successfully",response.data);
      setUserdata({ Email: "", Password: "" })
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>

      <h1>Login form</h1>
      <form onSubmit={handleSumbit}>
        <input type="email" placeholder='Enter your Email' name='Email' value={userData.Email} onChange={handleChange} />
        <input type="password" placeholder='Enter Your password' name='Password' value={userData.Password} onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>

    <p>Register Here <Link to="/Register" >Sign Up</Link></p>
    </>
  )
}

export default Login