import React from "react";
import { useState } from "react";
import "../index.css";
const Form = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };

  const [inputData, setInputData] = useState(data);
  console.log(inputData);

  const [mssg, setMssg] = useState(false);

  const handleInput = (event) => {
    console.log(event.target.value);
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  console.log(inputData);

  const submit = (event) => {
    event.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields are Mandatory");
    } else {
      setMssg(true);
      setTimeout(() => {
        setMssg(false);
      }, 4000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="border-2 border-black rounded-lg shadow-xl p-12 w-full max-w-md h-96" onSubmit={submit} >
        
         <div className="flex items-center justify-center ">
            <h1 className="mt-[-30px] text-2xl font-bold" >Sign up</h1></div>
        <div className="inputs pt-4 m-7 ">
          <input className="m-2 bg-black p-2 rounded-lg w-[300px] text-white "
            type="text"
            placeholder="Name"
            name="name"
            value={inputData.name}
            onChange={handleInput}
          ></input>
          <input className="m-2 bg-black p-2 rounded-lg w-[300px] text-white"
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleInput}
          ></input>
          <input className="m-2 bg-black p-2 rounded-lg w-[300px] text-white"
            type="password"
            placeholder="Password"
            name="password"
            value={inputData.password}
            onChange={handleInput}
          ></input>
        </div>
        <div className="flex items-center justify-center">
        <button className="bg-black text-white  rounded-md p-1 m-2">Signup</button>
        {mssg ? inputData.name + " : Signup Successfully" : null}
        </div>
      </form>
    </div>
  );
};

export default Form;
