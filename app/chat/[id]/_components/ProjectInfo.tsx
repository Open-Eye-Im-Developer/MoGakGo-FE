"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import dayjs from "dayjs";

import formatMeetingTime from "@/app/project/_utils/formatMeetingTime";
import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import useGetChatInfo from "../_api/useGetChatInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../_common/shadcn/ui/accordion";

function ProjectInfo() {
  const { id } = useParams<{ id: string }>();

  const { chatInfo, isLoading } = useGetChatInfo(id);

  if (isLoading)
    return (
      <Accordion
        className="absolute z-10 w-full bg-white"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-4 hover:no-underline">
            <Skeleton className="h-[20px] w-[230px]" />
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    );

  if (!chatInfo) return;
  const {
    meetDetail,
    meetStartTime,
    meetEndTime,
    meetLocationLatitude,
    meetLocationLongitude,
  } = chatInfo;

  return (
    <Accordion
      className="absolute z-10 w-full border-t-[1px] border-black bg-white"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex gap-2">
            <span>{meetDetail}</span>
            <Link
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_KAKAO_MAP_URL}/${meetDetail},${meetLocationLongitude},${meetLocationLatitude}`}
            >
              <Badge className="bg-[#E24A57]">장소보기</Badge>
            </Link>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          <div>{formatMeetingTime(meetStartTime, meetEndTime)}</div>
          <div> {dayjs(meetStartTime).format("YYYY. MM. DD")}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProjectInfo;
