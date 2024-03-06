import REGION_CODE from "../../_common/constants/regionCode";

export const formatRegionName = (regionCode: number) => {
  const regionName = Object.keys(REGION_CODE).find(
    region => REGION_CODE[region] === regionCode,
  );
  if (!regionName) return "";
  return regionName;
};
