import Delete from "@/util/deleteUser";
import Link from "next/link";

const getUsers = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
};

export default async function Users() {
  const user = await getUsers();
  // console.log(user)
  return (
    <div>
      <h1>Hi from User</h1>
      {user.map((data) => {
        return (
          <div className="user-item">
            <span><Link href={`/users/${data.name}`}>{data.name}</Link></span>
            
            <span style={{}}>
            <Link href={`/users/${data.name}/update`}>Edit</Link>
            </span>
            <span style={{}}>
            <Delete name={data.name}/>
            </span>
          </div>
        );
      })}
    </div>
  );
}
