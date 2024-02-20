import { useMutation } from "@tanstack/react-query";

import {
  CertificateArea,
  patchGeoCertificate,
} from "@/app/_common/api/location";

export const useMutationAuthMyLocation = () => {
  const { mutate } = useMutation({
    mutationFn: (data: CertificateArea) => patchGeoCertificate(data),
    onError: error => {
      console.log(error);
    },
  });

  return { mutate };
};
