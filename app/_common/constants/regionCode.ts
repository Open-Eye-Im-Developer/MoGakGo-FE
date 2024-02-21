interface RegionCode {
  [region: string]: number;
}

const REGION_CODE: RegionCode = {
  jongro: 11110, // 종로구
  jung: 11140, // 중구
  yongsan: 11170, // 용산구
  seongdong: 11200, // 성동구
  gwangjin: 11215, // 광진구
  dongdaemoon: 11230, // 동대문구
  jungnang: 11260, // 중랑구
  seongbuk: 11290, // 성북구
  gangbuk: 11305, // 강북구
  dobong: 11320, // 도봉구
  nowon: 11350, // 노원구
  eunpyeong: 11380, // 은평구
  seodaemun: 11410, // 서대문구
  mapo: 11440, // 마포구
  yangcheon: 11470, // 양천구
  gangseo: 11500, // 강서구
  guro: 11530, // 구로구
  geumcheon: 11545, // 금천구
  yeongdeungpo: 11560, // 영등포구
  dongjak: 11590, // 동작구
  gwanak: 11620, // 관악구
  seocho: 11650, // 서초구
  gangnam: 11680, // 강남구
  songpa: 11710, // 송파구
  gangdong: 11740, // 강동구
  pangyo: 41135, // 판교(분당구)
};

export default REGION_CODE;
