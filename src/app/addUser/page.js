"use client";

import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const addUser = async () => {
    // console.log(name,age,email);
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body:JSON.stringify({name,age,email})
    });
    response= await response.json();
    console.log(response);

  };
  return (
    <div>
      <h1>ADD New User</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter Your Age"
        className="input-field"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter Your Email"
        className="input-field"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
}
