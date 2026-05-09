import { NextRequest, NextResponse} from "next/server";

export function GET(request: NextRequest): NextResponse {
    const params = request.nextUrl.searchParams;
    const query = params.get("query");
    console.log(`GET /users query=${query}`);

    return NextResponse.json(
        {message: `GET /users query=${query}`},
        {status: 200},
    );
}