import { NextResponse } from "next/server";

export async function GET(request,content){
    // return NextResponse.json({status:"Working"});
    return new Response(`Working ${content.params.std}`);

}