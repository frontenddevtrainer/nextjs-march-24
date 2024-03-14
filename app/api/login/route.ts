// /login
// /people/1
// /product/1 | GET, POST, PUT, PATCH, DELETE, OPTIONS

import { NextRequest } from "next/server";

export function POST(request: NextRequest) {
    const { body } = request
    
    return Response.json({ messge: "user logged in." });
}