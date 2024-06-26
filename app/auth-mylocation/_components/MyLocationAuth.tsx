"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { useModalStore } from "@/app/_common/store/useModalStore";
import { cn } from "@/app/_common/shadcn/utils";
import { Form } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";
import WithOnMounted from "@/app/_common/hoc/WithOnMounted";

import MapComponent from "@/app/_common/components/MapComponent";
import LoadingSpinner from "@/app/_common/components/LoadingSpinner";
import Icon from "@/app/_common/components/Icon";
import CustomModal from "@/app/_common/components/CustomModal";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

import { CODE_TO_REGION_NAME } from "@/app/_common/constants/codeToRegionName";

import useQueryGeoAreaCode from "../_hooks/useQueryGeoAreaCode";
import { useMutationAuthMyLocation } from "../_hooks/useMutationAuthMyLocation";
import AlertMyLocationAuth from "./AlertMyLocationAuth";

const FAQ_URL = process.env.NEXT_PUBLIC_FAQ_URL;

const MyLocationAuthFormSchema = z.object({
  userId: z.number(),
  areaCode: z.number().refine(value => CODE_TO_REGION_NAME[value]),
});

function MyLocationAuth() {
  const router = useRouter();
  const { isAllowGPS } = usePositionStore();
  const { isAuthLocation, setAuthLocationOpen } = useModalStore();

  const { data: user } = useQuerySignUpUser();
  const { data: areaCode, isLoading, isError } = useQueryGeoAreaCode();

  const { mutate } = useMutationAuthMyLocation();

  const form = useForm({
    values: {
      areaCode: areaCode,
      userId: user?.id,
    },
    resolver: zodResolver(MyLocationAuthFormSchema),
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    if (!user || !areaCode || isError) return;

    mutate({
      userId: user.id,
      areaCode: areaCode,
    });
    handleBack();
  };

  const handleBack = () => {
    router.push("/");
  };

  const isSameWithCurrentRegion =
    areaCode && user?.region === CODE_TO_REGION_NAME[areaCode];

  if (isLoading) return <LoadingSpinner />;
  if (typeof window === "undefined") return;

  return (
    <>
      {
        <CustomModal open={isAuthLocation} setOpen={setAuthLocationOpen}>
          <AlertMyLocationAuth />
        </CustomModal>
      }
      <Form {...form}>
        <form
          className="flex h-full w-full flex-col pt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="flex flex-col gap-2 px-5">
            <p className="px-1 text-xs">내 현재 위치</p>
            <div
              className={cn(
                !isAllowGPS()
                  ? "bg-neoRed"
                  : areaCode && !isError
                    ? "bg-neoGreen"
                    : "bg-neoYellow",
                "rounded-md border border-black p-3 text-sm text-white shadow-neo",
              )}
            >
              {!isAllowGPS()
                ? "현재 위치를 확인할 수 없습니다."
                : areaCode && !isError
                  ? `현재 위치는 '${CODE_TO_REGION_NAME[areaCode]}'입니다.`
                  : "현재 위치는 서비스 지역이 아닙니다."}
            </div>
          </section>
          <div
            id="map-wrap"
            className="relative left-0 top-0 z-0 my-4 flex min-h-[307px] w-full translate-y-7 touch-none items-center justify-center bg-transparent transition-all duration-1000"
          >
            <MapComponent type="only-bounce" regionCode={areaCode ?? 0} />
          </div>
          <footer className="mt-10 flex w-full flex-col gap-2 p-4">
            <sub className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-primary">
              <Icon id="question-mark-fill" size={15} />
              <Link href={`${FAQ_URL}`}>
                <span className="align-middle">
                  {!isAllowGPS()
                    ? "왜 현재 위치를 확인할 수 없나요?"
                    : "왜 위치 인증이 필요한가요?"}
                </span>
              </Link>
            </sub>
            <section className="flex w-full items-end justify-between">
              <small
                className="cursor-pointer align-bottom text-gray-400  hover:underline hover:underline-offset-4"
                onClick={handleBack}
              >
                나중에 하기
              </small>
              <Button
                type="submit"
                disabled={
                  !formState.isValid || (isSameWithCurrentRegion as boolean)
                }
                className="bg-neoBlue p-4 text-white"
                variant={"outline"}
              >
                인증하기
              </Button>
            </section>
          </footer>
        </form>
      </Form>
    </>
  );
}

export default WithOnMounted(MyLocationAuth);
