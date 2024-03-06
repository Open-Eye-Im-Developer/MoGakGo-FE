import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { patchGeoCertificate } from "@/app/_common/api/location";

import { CertificateArea } from "@/app/_common/types/position";

export const useMutationAuthMyLocation = () => {
  const { mutate } = useMutation({
    mutationFn: (data: CertificateArea) => patchGeoCertificate(data),
    onSuccess: () => {
      toast.success("내 위치 인증이 완료되었습니다.");
    },
    onError: error => {
      console.log(error);
    },
  });

  return { mutate };
};
