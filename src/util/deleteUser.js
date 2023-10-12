"use client";

export default function Delete(props) {
  const name = props.name;
  const del = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${name}`, {
      method: "DELETE",
    });
    result = await result.json();
    alert(`${props.name} ${result.result}`);
    console.log(result.result);
  };
  return <button onClick={() => del()}>Delete</button>;
}
