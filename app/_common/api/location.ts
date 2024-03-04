import { ResponseError } from "../types/response";
import { Coordinate } from "../types/position";
import { instance } from "./instance";

interface GeoAreaCode {
  areaCode: number;
}

export interface CertificateArea extends GeoAreaCode {
  userId: number;
}

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
