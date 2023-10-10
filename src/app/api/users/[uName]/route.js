import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(req,content){
    // content gets the parameters 
    // console.log(content);

    const data=user;
    const res=data.filter((item)=>item.name==content.params.uName)

    return NextResponse.json(res.length!=0?res:{status:"Data not found"},res.length!=0?{status:200}:{status:404})
}
export async function PUT(request,content){
    let payload= await request.json();
    let userName=content.params.uName;
    if ( payload.name!=userName || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ status: "In Correct payload" }, { status: 400 });
      }
    // console.log(userName); 
    return NextResponse.json({"result":payload,"status":"Success"},{status:200});


     

}