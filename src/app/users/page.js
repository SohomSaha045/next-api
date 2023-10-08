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
          <div>
            <Link href={`/users/${data.name}`}>{data.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
