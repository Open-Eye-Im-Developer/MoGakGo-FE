import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { matchingId } = await request.json();
  const response = await fetch(
    `http://3.38.76.76:8080/api/v1/matches/${matchingId}/cancel`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
      },
    },
  );

  const data = await response.json();

  return NextResponse.json({ data, status: response.status });
}
