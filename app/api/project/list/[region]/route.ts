import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headers = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };
  const region = request.url.split("list/")[1];
  const projectsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/projects/${region}?cursorId=1&pageSize=5&sortOrder=ASC`,
    headers,
  );
  const profilesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/profiles/${region}?cursorId=1&pageSize=5&sortOrder=ASC`,
    headers,
  );

  const projects = await projectsResponse.json();
  const profiles = await profilesResponse.json();

  return NextResponse.json({ data: { projects, profiles } });
}
