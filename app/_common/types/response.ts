export interface ResponseError {
  timestamp: string;
  statusCode: number;
  code: string;
  message: string;
}

export interface ResponseData<T> {
  data: T[];
  hasNext: boolean;
  numberOfElements: number;
  size: number;
}
