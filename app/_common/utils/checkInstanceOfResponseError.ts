import { ResponseError } from "../types/response.types";

export const checkInstanceOfResponseError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any,
): object is ResponseError => {
  return (
    "timestamp" in object &&
    "statusCode" in object &&
    "code" in object &&
    "message" in object
  );
};
