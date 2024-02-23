import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  const response = await fetch(`http://3.38.76.76:8080/api/v1/projects/` + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
    },
  });
  if (!response.ok) {
    const data = await response.json();
    return NextResponse.json({ data: data, status: response.status });
  }

  return NextResponse.json({ data: "success", status: response.status });
}
