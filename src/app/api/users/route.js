// import { User } from "@/app/lib/model/user";
import { cUrl } from "../../lib/connect";
import { NextResponse } from "next/server";
import { User } from "../../lib/model/user";
import mongoose from "mongoose";

export async function GET(request) {
  // const data = user;
  // let data=[]
  try{
  await mongoose.connect(cUrl);
  let data= await User.find();
  // data=await data.json();
  console.log(data);
  return NextResponse.json(data,{status:200});
  }
  catch(e){
  return NextResponse.json({error:"Something went Wrong"}, { status: 400 });
  }
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ status: "no payload" }, { status: 400 });
  }
  try{
  await mongoose.connect(cUrl);
  // return NextResponse.json({
  //   status:payload
  // })
  let u = new User(payload);
  const result = await u.save();
  return NextResponse.json(
    {
      Status: result,
      success: true,
    },
    { status: 201 }
  );
  }
  catch(e){
    return NextResponse.json(
      {
        Status: e,
        success: false,
      },
      { status: 500 }
    );
  }
}
