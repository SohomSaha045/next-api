import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(req,content){
    // content gets the parameters 
    // console.log(content);

    const data=user;
    const res=data.filter((item)=>item.name==content.params.uid)

    return NextResponse.json(res.length!=0?res:{status:"Data not found"},res.length!=0?{status:200}:{status:404})
}