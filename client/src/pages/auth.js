import React, { useState } from 'react';
import axios from "axios";
import {useCookies} from "react-cookie"
import {useNavigate} from "react-router-dom"

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
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    const [_ , setCookies] = useCookies("access_token")
    const onSubmit = async (e) =>{
        e.preventDefault();
        try{
             const response = await axios.post("http://localhost:5000/auth/login" , {name , password});
            setCookies("access_token " , response.data.token);
            window.localStorage.setItem("userID",response.data.userID);
            // window.location.pathname = "/"
            navigate("/")
        }catch(err){
            console.error(err);
        }
    }
    return (
        <Form name={name}
       setName={setName}
       password={password}
       setPassword={setPassword}
       onSubmit={onSubmit}
       label="Login"/>
    )
};

const Register = () =>{
    
    const [name , setName] = useState("")
    const [password , setPassword] = useState("")

    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/auth/register" , {name , password});
            alert("registration complete")
        }catch(err){
            console.error(err);
        }

    }
    return (
       <Form name={name}
       setName={setName}
       password={password}
       setPassword={setPassword}
       onSubmit={onSubmit}
       label="Register"/>
    )
}


const Form = ({name , setName , password , setPassword , label ,onSubmit})=>{
    return(
        <div className='auth-container'>
<form onSubmit={onSubmit}>
    <h2>{label}</h2>
    <div className='form-group'>
        <label htmlFor='name'>Username:</label>
        <input type="text" id="username" value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>
    <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <button type="submit">{label}</button>
</form>
        </div>
    )
}