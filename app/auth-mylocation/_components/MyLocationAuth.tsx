"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IconAlertCircle } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useQueryUserData } from "@/app/my-page/_hooks/useQueryUserData";
import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { useModalStore } from "@/app/_common/store/useModalStore";
import { cn } from "@/app/_common/shadcn/utils";
import { Form } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";
import WithOnMounted from "@/app/_common/hoc/WithOnMounted";

import MapComponent from "@/app/_common/components/MapComponent";
import LoadingSpinner from "@/app/_common/components/LoadingSpinner";
import CustomModal from "@/app/_common/components/CustomModal";

import { CODE_TO_REGION_NAME } from "@/app/_common/constants/codeToRegionName";

import useQueryGeoAreaCode from "../_hooks/useQueryGeoAreaCode";
import { useMutationAuthMyLocation } from "../_hooks/useMutationAuthMyLocation";
import AlertMyLocationAuth from "./AlertMyLocationAuth";

const MyLocationAuthFormSchema = z.object({
  userId: z.number(),
  areaCode: z.number().refine(value => CODE_TO_REGION_NAME[value]),
});

function MyLocationAuth() {
  const router = useRouter();
  const { isAllowGPS } = usePositionStore();
  const { isAuthLocation, setAuthLocationOpen } = useModalStore();

  const { data: user } = useQueryUserData();
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
          className="relative flex h-screen w-full flex-col justify-between gap-5 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <header className="px-4 py-2 text-center">
            <h1 className="text-lg">내 위치 인증하기</h1>
          </header>
          <section className="h-full">
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
          </section>
          <div
            id="map-wrap"
            className="absolute left-0 top-1/2 z-0 flex w-full translate-y-10 touch-none items-center justify-center bg-transparent transition-all duration-1000"
          >
            <MapComponent type="only-bounce" regionCode={areaCode ?? 0} />
          </div>
          <footer className="mt-10 flex w-full flex-col gap-2 p-4">
            <sub className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-primary">
              <IconAlertCircle width={15} />
              {/* TODO: Link 추가하여 클릭하면 자주 묻는 질문 페이지로 이동 */}
              <span className="align-middle">
                {!isAllowGPS()
                  ? "왜 현재 위치를 확인할 수 없나요?"
                  : "왜 위치 인증이 필요한가요?"}
              </span>
            </sub>
            <section className="flex w-full items-end justify-between">
              <small
                className="cursor-pointer align-bottom text-gray-400  hover:underline hover:underline-offset-4"
                onClick={handleBack}
              >
                나중에 하기
              </small>
              {/* TODO: 이미 같은 위치로 인증된 경우에는 인증 버튼 disabled 하도록 추가 */}
              <Button
                type="submit"
                disabled={!formState.isValid}
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
