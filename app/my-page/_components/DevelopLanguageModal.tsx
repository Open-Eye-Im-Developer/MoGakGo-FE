import { ReactNode, useMemo } from "react";
import Image from "next/image";

import { Progress } from "@/app/_common/shadcn/ui/progress";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/app/_common/shadcn/ui/dialog";
import { Button } from "@/app/_common/shadcn/ui/button";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";

import { useQueryDevelopLanguage } from "../_hooks/useQueryDevelopLanguage";

interface DevelopLanguageModalProps {
  children: ReactNode;
}

function DevelopLanguageModal(props: DevelopLanguageModalProps) {
  const { children } = props;

  const { data, isLoading } = useQueryDevelopLanguage();

  const totalByte = useMemo(() => {
    if (data) {
      return data.reduce((prev, current) => (prev += current.byteSize), 0);
    }
    return 0;
  }, [data]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>주 언어</DialogTitle>
          <DialogDescription>
            Github에서 가장 많이 사용한 언어를 가져옵니다.
          </DialogDescription>
        </DialogHeader>
        {isLoading ? <LoadingSpinner /> : null}
        {!isLoading && data ? (
          <div className="flex flex-col gap-5 py-4">
            {data.map(({ language, byteSize, imageUrl }) => {
              const parcent = Math.floor((byteSize / totalByte) * 100);

              return (
                <div key={language} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={imageUrl}
                      alt={language}
                      width={48}
                      height={48}
                    />
                    <div className="flex items-baseline gap-2">
                      <p>{language}</p>
                      <p className="text-xs">{byteSize}byte</p>
                    </div>
                  </div>
                  <Progress value={parcent} className="h-2" max={totalByte} />
                </div>
              );
            })}
          </div>
        ) : null}
        <DialogFooter>
          <DialogClose>
            <Button type="submit" variant="default">
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DevelopLanguageModal;
