import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get("keyword");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lng");

  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}&x=${longitude}&y=${latitude}&radius=10000`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  return NextResponse.json({
    data: data.documents,
  });
}
