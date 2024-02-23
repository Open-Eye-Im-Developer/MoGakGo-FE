// 매칭 요청 생성 Route Handler
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { senderId, projectId } = await request.json();

  const response = await fetch(
    "http://3.38.76.76:8080/api/v1/project-requests",
    {
      method: "POSt",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ senderId, projectId }),
    },
  );

  const data = await response.json();

  return NextResponse.json({ data, status: response.status });
}
