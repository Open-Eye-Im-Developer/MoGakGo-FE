"use client";

import React, { forwardRef } from "react";
import Image from "next/image";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Separator } from "@/app/_common/shadcn/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";
import { Button } from "@/app/_common/shadcn/ui/button";

import ButtonRotate from "./ButtonRotate";
import BadgeAdditional from "./BadgeAdditional";

import "../_styles/card.css";

interface CardBackProps {
  requestList?: RequestList[];
  onRotate: () => void;
}

const ProjectCardBack = forwardRef<HTMLDivElement, CardBackProps>(
  function ProjectCardBack(props, ref) {
    const { requestList, onRotate } = props;
    const { toast } = useToast();

    const handleAccept = async (projectRequestId: number) => {
      const response = await fetch("/api/project/request/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectRequestId }),
      });
      const data = await response.json();

      toast({
        title:
          data.status === 200
            ? "요청을 수락했습니다."
            : "요청 수락에 실패했습니다.",
        description:
          data.status === 200
            ? "매칭이 되었어요! 채팅방으로 가볼까요?"
            : data.data.message,
        variant: data.status === 200 ? "default" : "destructive",
      });
    };

    return (
      <Card className="glass-morphism absolute inset-0 left-0 top-0 overflow-hidden border-none shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <CardHeader className="flex flex-row items-center justify-between border-b border-black px-4 py-2">
          <CardTitle className="flex grow flex-row items-center justify-between pt-1 text-lg font-bold">
            <p className="pl-2">요청 목록</p>
            <ButtonRotate onRotate={onRotate} />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex h-full flex-col px-0 pb-20">
          {Array.isArray(requestList) && requestList?.length === 0 ? (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-xl text-[#959595]">요청이 없어요 🥲</span>
            </div>
          ) : (
            <div
              ref={ref}
              className="flex h-full w-full flex-col gap-3 overflow-y-scroll px-5 pt-5"
            >
              {Array.isArray(requestList) &&
                requestList?.map(
                  ({
                    id,
                    senderPreview: {
                      id: senderId,
                      username,
                      avatarUrl,
                      achievementTitle,
                      developLanguages,
                      wantedJobs,
                    },
                  }) => (
                    <aside
                      key={id}
                      className="flex flex-col justify-center gap-3"
                    >
                      <main
                        key={senderId}
                        className="flex items-center justify-between"
                      >
                        <aside className="flex items-center gap-3">
                          <Image
                            src={avatarUrl}
                            alt="프로필 이미지"
                            width={60}
                            height={60}
                            className="rounded-2xl"
                          />
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <p className="text-lg font-semibold">
                                {username}
                              </p>
                              <p className="text-xs text-[#F76A6A]">
                                {achievementTitle || "null"}
                              </p>
                            </div>
                          </div>
                        </aside>
                        <aside className="flex items-center gap-2">
                          <BadgeAdditional
                            wantedJobs={wantedJobs}
                            developLanguages={developLanguages}
                          />
                          <Button
                            size="sm"
                            className="rounded-lg"
                            onClick={() => handleAccept(id)}
                          >
                            수락
                          </Button>
                        </aside>
                      </main>
                      <Separator className="bg-black" />
                    </aside>
                  ),
                )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
);

export default ProjectCardBack;
