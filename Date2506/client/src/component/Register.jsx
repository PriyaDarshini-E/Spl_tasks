import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [userData, setUserdata] = useState({ name: "", email: "", password: "", confirmpwd: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserdata({ ...userData, [name]: value });
  }

  const handleSumbit = async(e) => {
    e.prevent.Default();
    try {
      const storedata = await axios.post("")
      alert("Registed successfully")
      console.log("Registed successfully",userData.data);
      setUserdata({ name: "", email: "", password: "", confirmpwd: "" })
      
    } catch (error) {
      
    }

  }
  return (
    <>

      <h1>Register form</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder='Enter Your Name' name='name' value={userData.name} onChange={handleChange} />
        <input type="email" placeholder='Enter your Email' name='email' value={userData.email} onChange={handleChange} />
        <input type="password" placeholder='Enter Your password' name='password' value={userData.password} onChange={handleChange} />
        <input type="password" placeholder='confirm password' name='confirmpwd' value={userData.confirmpwd} onChange={handleChange} />
        <button type='submit'>Register</button>
      </form>

    </>
  )
}

export default Register