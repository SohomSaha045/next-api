'use client'
import { useState } from "react"
import { loginUser } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function NewLogin(){
    const [name,setName]=useState('');
    const dispatch=useDispatch();
    const userDispatch=()=>{
        console.log('name');
        dispatch(
            loginUser(name)
        )
    }
    return (
        <div className="left">
        <h3> Users Login :</h3>
        <input type='text' placeholder="User to be Logged In" className="input-field" 
        onChange={(e)=>setName(e.target.value)}></input>
        <button className="btn" onClick={userDispatch}>Login</button>
        </div>
    )
}