import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const { id } = await request.json();
  const response = await fetch(
    `http://3.38.76.76:8080/api/v1/projects/${id}/cancel`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
      },
    },
  );

  const data = await response.json();
  
  return NextResponse.json({ data, status: response.status });
}
