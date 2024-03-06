// 매칭 요청 조회 Route Handler
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const cursorId = request.nextUrl.searchParams.get("cursorId")!;

  // TODO: 프로젝트 아이디 받아와서 호출하기 (현재는 임시로 64 또는 65로 설정)
  const url = new URL(`http://3.38.76.76:8080/api/v1/projects/${id}/requests`);
  const params = {
    pageSize: "5",
    cursorId: cursorId,
  };
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
    },
  });
  if (!response.ok) {
    const data = await response.json();
    return NextResponse.json({ data: data, status: response.status });
  }

  const data = await response.json();
  return NextResponse.json({ data: data.data, status: response.status });
}
