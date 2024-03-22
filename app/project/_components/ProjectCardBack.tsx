"use client";

import React, { forwardRef } from "react";

import { Separator } from "@/app/_common/shadcn/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import { RequestList } from "../_types/type";
import useAcceptRequestMutation from "../_hooks/useAcceptRequestMutation";
import DialogMoreInfo from "./DialogMoreInfo";
import ButtonRotate from "./ButtonRotate";

import "../_styles/card.css";

interface CardBackProps {
  requestList?: RequestList[];
  projectStatus: string;
  onRotate: () => void;
  handleMoreButton: () => void;
  handleAcceptButton: (isError: boolean) => void;
  isAccepted: boolean;
}

const ProjectCardBack = forwardRef<HTMLDivElement, CardBackProps>(
  function ProjectCardBack(props, ref) {
    const {
      requestList,
      onRotate,
      handleMoreButton,
      handleAcceptButton,
      isAccepted,
      projectStatus,
    } = props;
    const { createAcceptRequest, isError } = useAcceptRequestMutation();

    const handleAccept = async (projectRequestId: number) => {
      createAcceptRequest(projectRequestId);
      handleAcceptButton(isError);
    };

    return (
      <Card className="absolute inset-0 left-0 top-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <CardHeader className="flex flex-row items-center justify-between border-b border-black px-4 py-2">
          <CardTitle className="flex grow flex-row items-center justify-between pt-1 text-lg font-bold">
            <p className="pl-2">요청 목록</p>
            <ButtonRotate onRotate={onRotate} />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex h-full flex-col items-center px-0 pb-20">
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
                requestList?.map(({ id, senderPreview }) => (
                  <aside
                    key={id}
                    className="flex flex-col justify-center gap-3"
                  >
                    <main className="flex items-center justify-between">
                      <aside className="flex items-center gap-5">
                        <div className="ml-2 rounded-full">
                          <Avatar className="h-14 w-14">
                            <AvatarImage
                              src={senderPreview.avatarUrl}
                              alt="profile"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-lg font-semibold">
                            {senderPreview.username}
                          </p>
                          <p className="text-xs text-[#F76A6A]">
                            {senderPreview.achievementId || "null"}
                          </p>
                        </div>
                      </aside>
                      <aside className="flex items-center gap-2">
                        <DialogMoreInfo response={senderPreview} />
                        {!isAccepted && projectStatus === "PENDING" && (
                          <Button
                            size="sm"
                            className="rounded-lg bg-neoYellow"
                            onClick={() => {
                              handleAccept(id);
                            }}
                          >
                            수락
                          </Button>
                        )}
                      </aside>
                    </main>
                    <Separator className="bg-black" />
                  </aside>
                ))}
            </div>
          )}
          {!isAccepted && (
            <Button className="w-fit" onClick={handleMoreButton}>
              더보기
            </Button>
          )}
        </CardContent>
      </Card>
    );
  },
);

export default ProjectCardBack;
