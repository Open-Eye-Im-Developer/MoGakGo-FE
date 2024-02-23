import React from "react";
import Image from "next/image";

import { Separator } from "@/app/_common/shadcn/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import ButtonRotate from "./ButtonRotate";

interface CardBackProps {
  onRotate: () => void;
}

function ProjectCardBack(props: CardBackProps) {
  // TODO: 실제 사용자 데이터로 대체하기 & 사용 언어, 관심 직무 태그 배치 및 데이터 연동하기
  const { onRotate } = props;

  return (
    <Card className="card absolute inset-0 left-0 top-0 overflow-hidden border-none shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <CardHeader className="flex flex-row items-center justify-between border-b px-4 py-2">
        <CardTitle className="flex grow flex-row items-center justify-between pt-1 text-lg font-bold">
          <p className="pl-2">요청 목록</p>
          <ButtonRotate onRotate={onRotate} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-full min-h-0 flex-col overflow-y-scroll px-0 pb-20 pt-5">
        <div className="flex flex-col justify-center gap-3 px-5">
          {Array.from({ length: 15 }).map(() => (
            <>
              <main className="flex items-center justify-between">
                <aside className="flex items-center gap-3">
                  <Image
                    src="/images/profileImage.jpg"
                    alt="프로필 이미지"
                    width={60}
                    height={60}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg">Coggie</p>
                      <p className="text-xs text-[#F76A6A]">응애 개발자</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge className="h-5 text-[10px]">Frontend</Badge>
                    </div>
                  </div>
                </aside>
                <Button size="sm" className="rounded-lg">
                  수락
                </Button>
              </main>
              <Separator />
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCardBack;
