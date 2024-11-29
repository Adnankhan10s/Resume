
import dbConnect from "@/dbConfig/Connection";
import Message from "@/models/Message";
import { NextRequest, NextResponse } from "next/server";

export  async function POST (request:NextRequest, response:NextResponse){
      try {
        const body = await request.json();
        await dbConnect();
        const newMessage = new Message(body);
        await newMessage.save();
        return NextResponse.json({status:200 , message:"New Mesage ecieved"}, {status:200})

      } catch (error) {
        return NextResponse.json({status:400, message:"Message Sending Errror"},{status:401})
      }


}