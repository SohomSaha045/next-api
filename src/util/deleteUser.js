"use client";

export default function Delete(props) {
  const name = props.name;
  const del = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${name}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result.success) {
      alert(`${props.name} ${result.result}`);
    } else {
      alert(`SomeThing went Wrong`);
    }
    console.log(result.result);
    window.location.reload();
  };
  return <button onClick={() => del()}>Delete</button>;
}
