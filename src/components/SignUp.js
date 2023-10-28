import React, { useState } from "react";
//import React from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";


function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  /* Here simply we storing the object and displaying in console 
     so change code to store in database
  let handleSubmit = (event) =>
  {
    const obj = {name, email, password};   // creates data objecct to store entered values to pass to backend
    console.log(obj);
    event.preventDefault();
  };
  */
  let handleSubmit = (event) =>
  {
    const obj = {name, email, password};   // creates data objecct to store entered values to pass to backend
    console.log(obj);
    //const url = "http://localhost:5500/students/create-student";
    const url = "https://studentdatabase-ayyh.onrender.com/students/create-student";
    
    axios.post(url,obj).then((res) => {
      if(res.status === 200){
        alert("Student added successfully");
      }
      else {
        Promise.reject();
      }
    }).catch(err => {
      alert(err);
    })
    event.preventDefault();
  };

  return (
    <div>
        {console.log(name,email,password)}
        <h1>Student Registration Form</h1>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        id="email" 
        placeholder="Enter your email" 
        onChange={(e)=> setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Submit" />

        

      </form>
      <h2>Have an Account ?</h2>
      {/*Here This link helps to direct to the login page */}
      <Link to="/login">Login Page</Link>


      <h2>Import Data in Table Format</h2>
      <Link to="/View">View Page</Link>
    </div>
  );
}

export default SignUp;

