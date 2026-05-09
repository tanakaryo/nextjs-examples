import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const data = await request.json();

    console.log("API Routes received requests", data.name);

    return NextResponse.json({message: "Success"});
}