export interface Coordinate {
  longitude: number;
  latitude: number;
}

export interface PositionState extends Coordinate {
  isGPSOn: boolean;
}

export type GeoAreaCode = number;
