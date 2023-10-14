"use client";
import styles from "../app/style.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const gotADD = () => {
    router.push("/addUser");
  };
  const gotList = () => {
    router.push("/users");
  };
  return (
    <div style={{width:"100%",backgroundColor:"grey"}}>
        <div >
        <button type="button" onClick={gotADD} className="btn">
        Add User to Database
        </button>
        <button type="button" onClick={gotList} className="btn">
         Go to User List
        </button>
        </div>

      
    </div>
  );
}
