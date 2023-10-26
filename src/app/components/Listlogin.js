'use client'
import { useSelector } from "react-redux"

export default function ListLogin(){
    const loggedInUser=useSelector((data)=>data.users)
    console.log(loggedInUser);
    return (
        <div className="right">
        <h3>Active Users are:</h3>
        {
            loggedInUser.map((e)=>(
                <div>
                {e.name}
                </div>
            ))
        }
        </div>
    )
}