import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!("key" in body)) {
    return new Response(undefined, { status: 400 });
  }

  const key = body.key;
  const cookie = request.cookies.get(key);

  if (!cookie) return new Response(undefined, { status: 404 });

  return new Response(cookie.value, {
    status: 200,
  });
}
