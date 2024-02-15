import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";
import { Input } from "@/app/_common/shadcn/ui/input";
import { Button } from "@/app/_common/shadcn/ui/button";

export default function ChatCard() {
  return (
    <Card className="overflow-hidden shadow-md">
      <CardHeader className="border-b bg-white py-4">
        <CardTitle className="text-base">📍 맥심플랜트 이태원점</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-0 px-0">
        <section className="flex max-h-96 flex-col gap-5 overflow-y-scroll px-5 py-2"></section>
        <div className="flex h-24 grow items-center gap-2 border-t px-5">
          <Input type="text" placeholder="대화를 입력하세요." />
          <Button>전송</Button>
        </div>
      </CardContent>
    </Card>
  );
}
