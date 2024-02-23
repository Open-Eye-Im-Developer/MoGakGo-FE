"use client";

import React from "react";
import Image from "next/image";
import { IconMoodPuzzled } from "@tabler/icons-react";

import { cn } from "@/app/_common/shadcn/utils";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_common/shadcn/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/_common/shadcn/ui/card";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import ProjectRemoveDialog from "./ProjectRemoveDialog";
import ButtonRotate from "./ButtonRotate";

import "../_styles/card.css";

interface CardFrontProps {
  initialRotate?: boolean;
  onRotate: () => void;
}

const badgeList = ["조용한", "수다스러운이이", "각자도생"];

function ProjectCardFront(props: CardFrontProps) {
  // TODO: 실제 사용자 데이터로 대체하기 & 프로젝트 분위기, 사용 언어, 관심 직무 태그 배치 및 데이터 연동하기
  // TODO: 삭제, 수정 버튼 클릭 시 이벤트 연결하기 & 요청이 있을 경우 삭제하지 못하는 로직 추가하기
  // TODO: 사용자(제안자, 요청자)타입에 따라 Footer의 버튼 조건부 렌더링 추가하기(나가기, 삭제, 요청)
  const { initialRotate, onRotate } = props;

  return (
    <Card
      className={cn(
        `card absolute inset-0 left-0 top-0 border-none shadow-md [backface-visibility:hidden]`,
        initialRotate ? "[transform:rotateY(180deg)]" : "",
      )}
    >
      <CardHeader className="px-5 pt-4">
        <CardDescription className="flex justify-between text-lg font-bold text-[#a2a2a2]">
          <span className="flex items-center gap-2">
            <ButtonRotate onRotate={onRotate} />
            <Popover>
              <PopoverTrigger>
                <IconMoodPuzzled />
              </PopoverTrigger>
              <PopoverContent className="max-w-[130px]">
                <h1 className="mb-2 text-sm font-bold">🏷️ 분위기 태그</h1>
                {badgeList.map(badge => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </PopoverContent>
            </Popover>
          </span>
          <span className="flex items-center">@zentechie7</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <div className="relative rounded-xl">
            <Image
              src="/images/profileImage.jpg"
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
          <Image src="/images/grass.png" alt="잔디력" width={50} height={50} />
          <div className="mr-10 w-40">
            <Progress value={50} />
            <span className="text-xs text-[#868686]">50%</span>
          </div>
        </div>
      </CardContent>
      {!initialRotate && (
        <CardFooter className="flex items-center justify-between">
          <div>
            <p className="font-bold">📍 맥심플랜트 이태원점</p>
            <p>🕡 16:00 ~ 18:00</p>
          </div>
          <ProjectRemoveDialog />
        </CardFooter>
      )}
    </Card>
  );
}

export default ProjectCardFront;
