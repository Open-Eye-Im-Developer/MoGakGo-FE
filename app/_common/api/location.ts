import { ResponseError } from "../types/response";
import { CertificateArea, Coordinate, GeoAreaCode } from "../types/position";
import { instance } from "./instance";

export const getGeoAreaCode = async ({ latitude, longitude }: Coordinate) => {
  const { data } = await instance.get<GeoAreaCode | ResponseError>(
    "/geo/areacode",
    {
      params: {
        latitude,
        longitude,
      },
      validateStatus: status => status < 500,
    },
  );

  return data;
};

export const patchGeoCertificate = (data: CertificateArea) => {
  return instance.patch("/cert/certificate", {
    userId: data.userId,
    areaCode: data.areaCode,
  });
};
