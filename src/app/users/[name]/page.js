const getUsers = async (name) => {
    let data = await fetch(`http://localhost:3000/api/users/${name}`);
    data = await data.json();
    // data= await data.filter((e)=>e.name==name);
    return data;
};
export default async function Login({params}){
    const data= await getUsers(params.name);
     return (

        <div>
         {
            data.map(
                (e)=>{
                    return (
                        <>
                        <h1>Name: {e.name}</h1>
                        <h2>Age: {e.age}</h2>
                        <h3>Email: {e.email}</h3>
                        </>
                    )
                }
            )
         }
        
        </div>
    )
}