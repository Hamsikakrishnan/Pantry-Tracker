import Pantry from "../../(models)/Pantry";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json();
        const item = body.pantry;
        await Pantry.create(item);
        return NextResponse.json({message: "Item inserted successfully"}, {status: 201});
    }
    catch(err){
        return NextResponse.json({message: "Error", err}, {status: 500});
    }
}