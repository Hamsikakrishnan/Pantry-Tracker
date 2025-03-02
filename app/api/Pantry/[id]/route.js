import Pantry from "@/app/(models)/Pantry";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}){
    try{
       const {id} = await params;
       await Pantry.findByIdAndDelete(id);
       return NextResponse.json({message:"Record Deleted"},{status: 200})
    }
    catch(error){
        return NextResponse.json({message:"Error", error},{status: 500})
    }
}

