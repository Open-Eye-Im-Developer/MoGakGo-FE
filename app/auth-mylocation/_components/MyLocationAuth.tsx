"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IconAlertCircle } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { useModalStore } from "@/app/_common/store/useModalStore";
import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Form } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import CustomModal from "@/app/_common/components/CustomModal";

import { CODE_TO_REGION_NAME } from "@/app/_common/constants/codeToRegionName";

import useQueryGeoAreaCode from "../hooks/useQueryGeoAreaCode";
import { useMutationAuthMyLocation } from "../hooks/useMutationAuthMyLocation";
import AlertMyLocationAuth from "./AlertMyLocationAuth";

export const MyLocationAuthFormSchema = z.object({
  userId: z.number(),
  areaCode: z.number().refine(value => CODE_TO_REGION_NAME[value]),
});

function MyLocationAuth() {
  const router = useRouter();
  const { isAllowGPS } = usePositionStore();
  const { authLocation, setAuthLocationOpen } = useModalStore();
  const { user } = useAuthStore();

  const { data: code, isLoading, isError } = useQueryGeoAreaCode();

  const { mutate } = useMutationAuthMyLocation();

  const form = useForm({
    values: {
      areaCode: code && code.areaCode,
      userId: 2,
    },
    resolver: zodResolver(MyLocationAuthFormSchema),
  });

  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    if (!code || !isError) return;

    mutate({
      userId: user.id,
      areaCode: code.areaCode,
    });

    // TODO: user 정보 저장 후 mutate 잘 되는지 확인 후 제거
    // console.log(getValues(["userId", "areaCode"]));
  };

  const handleBack = () => {
    router.push("/");
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {
        <CustomModal open={authLocation} setOpen={setAuthLocationOpen}>
          <AlertMyLocationAuth />
        </CustomModal>
      }
      <Form {...form}>
        <form
          className="flex h-full w-full flex-col gap-5 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <header className="px-4 py-2">
            <h1 className="text-xl font-semibold">내 위치 인증하기</h1>
          </header>
          <section>
            <section className="flex flex-col gap-2 px-5">
              <p className="px-1">내 현재 위치</p>
              <div className="rounded-md border border-primary bg-primary p-3 text-white">
                {!isAllowGPS()
                  ? "현재 위치를 확인할 수 없습니다."
                  : code? && !isError
                    ? `${CODE_TO_REGION_NAME[code.areaCode]}`
                    : "현재 위치는 서비스 지역이 아닙니다."}
              </div>
            </section>
          </section>
          <footer className="mt-10 flex flex-col gap-2 p-4">
            <sub className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-primary">
              <IconAlertCircle width={15} />
              <span className="align-middle">
                왜 현재 위치를 확인할 수 없나요?
              </span>
            </sub>
            <section className="flex items-end justify-between">
              <small
                className="cursor-pointer align-bottom text-gray-400  hover:underline hover:underline-offset-4"
                onClick={handleBack}
              >
                나중에 하기
              </small>
              <Button type="submit" disabled={!formState.isValid}>
                확인
              </Button>
            </section>
          </footer>
        </form>
      </Form>
    </>
  );
}

export default MyLocationAuth;
