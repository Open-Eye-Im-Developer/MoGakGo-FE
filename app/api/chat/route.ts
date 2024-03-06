import { NextRequest, NextResponse } from "next/server";

interface ChatMessagesResponseData {
  data: ChatMessage[];
  hasNext: boolean;
}

export async function GET(request: NextRequest) {
  const chatRoomId = request.nextUrl.searchParams.get("chatRoomId");
  let cursorId: number | null = null;
  let isEndOfData = true;
  const messages = [];

  while (isEndOfData) {
    const response = await fetch(
      `http://3.38.76.76:8080/api/v1/chat/${chatRoomId}` +
        "?pageSize=5" +
        `${cursorId ? `&cursorId=${cursorId}` : ""}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SWAGGER_KEY}`,
        },
      },
    );
    const data: ChatMessagesResponseData = await response.json();
    const { data: prevMessages, hasNext } = data;

    messages.push(...prevMessages);

    cursorId = prevMessages[prevMessages.length - 1]?.id;
    isEndOfData = hasNext;
  }

  return NextResponse.json({ data: messages });
}
