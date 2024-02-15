import { Badge } from "@/app/_common/shadcn/ui/badge";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/_common/shadcn/ui/card";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import Image from "next/image";
import React from "react";

interface CardFrontProps {}

export default function CardFront({}: CardFrontProps) {
  // TODO: 실제 사용자 데이터로 대체하기 & 프로젝트 분위기, 사용 언어, 관심 직무 태그 배치 및 데이터 연동하기
  return (
    <Card className="absolute inset-0 left-0 top-0 shadow-md [backface-visibility:hidden]">
      <CardHeader>
        <CardDescription className="self-end text-lg font-bold text-[#a2a2a2]">
          @zentechie7
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <div className="relative rounded-xl">
            <Image
              src="/profileImage.jpg"
              alt="프로필 이미지"
              width={150}
              height={150}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-center gap-[6px]">
            <div className="flex flex-col items-center gap-1 p-1">
              <h1 className="text-xl font-bold">Coggie</h1>
              <h3 className="text-xs text-[#F76A6A]">응애 개발자</h3>
            </div>
            <p className="text-[#868686]">나도 잘 하고 싶어요.</p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              <Badge>Frontend</Badge>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image src="/grass.png" alt="잔디력" width={50} height={50} />
          <div className="mr-10 w-40">
            <Progress value={50} />
            <span className="text-xs text-[#868686]">50%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p className="font-bold">📍 맥심플랜트 이태원점</p>
          <p>🕡 16:00 ~ 18:00</p>
        </div>
        <div className="space-x-2">
          <Button
            onClick={e => {
              e.stopPropagation();
            }}
          >
            수정
          </Button>
          <Button
            onClick={e => {
              e.stopPropagation();
            }}
          >
            삭제
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
