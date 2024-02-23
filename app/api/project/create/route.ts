import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { formattedValues } = await request.json();
  
  const response = await fetch("http://3.38.76.76:8080/api/v1/projects", {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedValues),
  });

  const data = await response.json();
  return NextResponse.json({ data, status: response.status });
}
