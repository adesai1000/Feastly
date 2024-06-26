import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//Fetch all categories
export const GET = async ()=>{
    try{
    const categories = await prisma.category.findMany()

    return new NextResponse(JSON.stringify(categories),{status:200});
    }
    catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something Went wrong."}),{status:500});
    }
    
}
