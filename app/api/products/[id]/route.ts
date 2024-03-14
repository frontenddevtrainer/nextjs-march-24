import { NextRequest } from "next/server";

export function GET(request: NextRequest, { params } : { params : { id : string } }){

    return Response.json({ message: `You are looking for product id ${params.id}` })

}