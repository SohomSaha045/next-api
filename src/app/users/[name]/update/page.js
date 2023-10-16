"use client";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  var n = params.name;
  const [name, setName] = useState(n);
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const getAndPut = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${n}`);
    data = await data.json();
    // data= await data.filter((e)=>e.name==name);
    // console.log(data);
    setAge(data[0].age);
    setEmail(data[0].email);
  };
  useEffect(() => {
    getAndPut();
  }, []);
  // console.log(params.name);
  const router = useRouter();
  const updateUser = async () => {

    let result = await fetch(`http://localhost:3000/api/users/${n}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result.status === "Success") {
      alert("Updated Data Succesfully");
    }
    console.log(result);
    router.push(`/users/${name}`);
    // redirect('/users','replace');
  };
  return (
    <div>
      <h1> Update Info </h1>
      <input
        className="input-field"
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        className="input-field"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}
