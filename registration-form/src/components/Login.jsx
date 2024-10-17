import React from "react";
import "../index.css";
import { useState } from "react";
import {Link} from "react-router-dom";


const Login = () => {
        const datalogin ={
           username :"",
           password:"",
        };
      const[logval,setLogval]=useState(datalogin);

      const handleLogin=(event)=>{
        setLogval({...logval,[event.target.name]:event.target.value})
      };
      console.log(logval);

      const[mssg1,setMssg1] = useState(false);

const submit=(event)=>{
 if(!logval.username || !logval.password){
    alert("All fields are mandatory");
 }
 else{
      setMssg1(true);
      setTimeout(()=>{
        setMssg1(false);
      },4000)
 }
};

  return (
    <>
      <div className="flex  justify-center items-center h-screen ">
        <form className="flex flex-col flex-wrap items-center border-2 border-black p-[90px] rounded-xl shadow-lg">
          <h1 className="text-3xl text-center pb-[100px] mt-[-60px]">Login</h1>
          <div className="flex flex-col gap-4 mt-[-50px]">
            <p className="mb-[-20px]">Username</p>
            <input
              className=" b-2 border-black bg-black text-white rounded-md p-2 m-1 w-[300px] "
              type="text"
              placeholder="Type your input"
              onChange={handleLogin}
               name="username"
               value={logval.username}
            ></input>
            <p className="mb-[-20px]">Password</p>
            <input
              className="b-2 border-black bg-black text-white rounded-md p-2 m-1"
              type="password"
              placeholder="Type your password"
              onChange={handleLogin}
              name="password"
              value={logval.password}
            ></input>
          </div>
          <button onClick={submit}  className=" b-2 border-blue-600 bg-blue-600 text-white rounded-lg p-2 mt-8 w-[100px]">Login</button>
           {mssg1 ? logval.username + " : login Successfully" : null}
           <Link  to="/Signup" className="text-blue-600 mt-4">Dont have an account? Sign up here</Link>
           
        </form>
      </div>
    </>
  );
};
export default Login;
