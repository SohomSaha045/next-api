import { User } from "@/app/lib/model/user";
import { user } from "@/util/db";
import { NextResponse } from "next/server";
import { cUrl } from "../../../lib/connect";
import mongoose from "mongoose";



export async function GET(req, content) {
  // content gets the parameters
  // console.log(content);
  try {
    await mongoose.connect(cUrl);
    let data = await User.find({ name: content.params.uName });
    // console.log(data);
    return NextResponse.json(
      
        data
      ,
      {
        status: 200,
      }
    );
    // const data = user;
    // const res = data.filter((item) => item.name == content.params.uName);
  } catch (e) {
    return NextResponse.json(
      { status: "Data not found", error: e },
      { status: 404 }
    );
  }
}
export async function PUT(request, content) {
  let payload = await request.json();
  let userName = content.params.uName;
  if (
    payload.name != userName ||
    !payload.name ||
    !payload.age ||
    !payload.email
  ) {
    return NextResponse.json({ status: "In Correct payload" }, { status: 400 });
  }
  // console.log(userName);
  
  await mongoose.connect(cUrl);
  let data = await User.findOneAndUpdate({ name: content.params.uName },{
    name:payload.name,
    age:payload.age,
    email:payload.email
  });
  return NextResponse.json(
    { result: data, status: "Success" },
    { status: 200 }
  );
}
export function DELETE(request, content) {
  let userName = content.params.uName;
  if (userName) {
    return NextResponse.json(
      {
        result: "User Deleted",
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        result: "Internal Error Please after Some Time",
      },
      {
        status: 400,
      }
    );
  }
}
