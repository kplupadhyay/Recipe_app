import React, { useState } from 'react'

export default function auth() {
  return (
    <div className='auth'>
      <Login/>
      <Register/>
    </div>
  )
}



const Login =()=>{
    const [name , setName] = useState("")
    const [password , setPassword] = useState("")
    return (
        <Form name={name}
       setName={setName}
       password={password}
       setPassword={setPassword}
       label="Login"/>
    )
};

const Register = () =>{
    
    const [name , setName] = useState("")
    const [password , setPassword] = useState("")
    return (
       <Form name={name}
       setName={setName}
       password={password}
       setPassword={setPassword}
       label="Register"/>
    )
}


const Form = ({name , setName , password , setPassword , label})=>{
    return(
        <div className='auth-container'>
<form>
    <h2>{label}</h2>
    <div className='form-group'>
        <label htmlFor='name'>Username:</label>
        <input type="text" id="username" value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>
    <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <button type="submit">{label}</button>
</form>
        </div>
    )
}