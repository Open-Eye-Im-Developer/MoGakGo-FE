export async function POST(request: Request) {
  const body = await request.json();

  if (!("key" in body)) {
    return new Response(undefined, { status: 400 });
  }

  return new Response(undefined, {
    status: 200,
    headers: {
      "Set-Cookie": `${body.key}=; Max-age=0`,
    },
  });
}
