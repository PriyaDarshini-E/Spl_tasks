import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigation =useNavigate()
  const [userData, setUserdata] = useState({ Name: "", Email: "", Password: "", Confirm_Password: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserdata({ ...userData, [name]: value });
  }

  const handleSumbit = async(e) => {
    e.preventDefault();
    try {
      const storedata = await axios.post("http://localhost:3000/api/register/createData",userData)
      // console.log(storedata.data.msg)
      alert(storedata.data.msg)
      navigation("/")
      setUserdata({ Name: "", Email: "", Password: "", Confirm_Password: "" })
      
    } catch (error) {
      console.log(error)
      alert(error.response.data.msg) 
    }

  }
  return (
    <>

      <h1>Register form</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder='Enter Your Name' name='Name' value={userData.Name} onChange={handleChange} />
        <input type="email" placeholder='Enter your Email' name='Email' value={userData.Email} onChange={handleChange} />
        <input type="password" placeholder='Enter Your password' name='Password' value={userData.Password} onChange={handleChange} />
        <input type="password" placeholder='confirm password' name='Confirm_Password' value={userData.Confirm_Password} onChange={handleChange} />
        <button type='submit'>Register</button>
      </form>

    </>
  )
}

export default Register