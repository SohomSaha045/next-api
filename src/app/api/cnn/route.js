import { cUrl } from "@/app/lib/connect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {User} from '../../lib/model/user'

export async function GET(){
    await mongoose.connect(cUrl)
    const data= await User.find();
    // console.log(data);
    return NextResponse.json({Result : data})

}