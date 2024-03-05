export interface Coordinate {
  longitude: number;
  latitude: number;
}

export interface PositionState extends Coordinate {
  isGPSOn: boolean;
}

export interface GeoAreaCode {
  areaCode: number;
}

export interface CertificateArea extends GeoAreaCode {
  userId: number;
}
