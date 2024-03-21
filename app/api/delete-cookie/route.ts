import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!("key" in body)) {
    return new Response(undefined, { status: 400 });
  }

  const options = {
    ...(body.options ?? {}),
    "Max-age": 0,
  };

  return new Response(undefined, {
    status: 200,
    headers: {
      "Set-Cookie": `${body.key}=; ${Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join("; ")}`,
    },
  });
}
