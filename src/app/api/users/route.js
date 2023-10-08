import { NextResponse } from "next/server";

export async function GET(request){
    // return new Response("Users from Server");
    return NextResponse.json({"Name":"Sohom"},{status:201})
}