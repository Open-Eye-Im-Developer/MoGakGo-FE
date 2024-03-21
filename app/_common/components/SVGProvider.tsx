"use client";

import { createPortal } from "react-dom";

import WithOnMounted from "../hoc/WithOnMounted";

const spriteSVGCode = (
  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
    <symbol
      id="arrow-left-turn"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3801 5.19012H16.8601V3.67012H7.71009V0.620117H6.19009V2.14012H4.67009V3.67012H3.14009V5.19012H1.62009V6.71012H0.0900879V8.24012H1.62009V9.76012H3.14009V11.2901H4.67009V12.8101H6.19009V14.3301H7.71009V11.2901H13.8101V12.8101H15.3301V14.3301H13.8101V15.8601H12.2901V17.3801H15.3301V15.8601H18.3801V14.3301H19.9001V6.71012H18.3801V5.19012Z"
        fill="#000001"
      />
    </symbol>
    <symbol id="chevron-right" viewBox="0 0 24 24">
      <path
        d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="chevron-left" viewBox="0 0 24 24">
      <path
        d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="plus" viewBox="0 0 24 24">
      <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" fill="currentColor" />
    </symbol>
    <symbol id="notification" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.8525 19.424999999999997H24v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M22.8525 2.2874999999999996H24V4.574999999999999h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 21.7125h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 19.424999999999997h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 14.857499999999998h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 0h2.2874999999999996v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 22.86h2.2874999999999996V24H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 20.572499999999998h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 17.145h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 13.7175h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 2.2874999999999996h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 18.285h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 8.0025h1.1400000000000001v5.715h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 15.997499999999999h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 5.715h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m6.855 15.997499999999999 2.2874999999999996 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 3.4275 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 2.2800000000000002 0 0 -1.1400000000000001 -10.2825 0 0 1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 19.424999999999997h10.2825v1.1475H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 3.4275h2.2874999999999996V4.574999999999999h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 2.2874999999999996h3.4275v1.1400000000000001h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.995 3.4275h2.2874999999999996V4.574999999999999h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 4.574999999999999h1.1400000000000001v1.1400000000000001H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 18.285h2.2874999999999996v1.1400000000000001H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 15.997499999999999h1.1400000000000001v1.1475H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 5.715h1.1400000000000001v2.2874999999999996H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 8.0025h1.1475v5.715H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 20.572499999999998h1.1400000000000001v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 17.145h1.1400000000000001v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 13.7175h1.1400000000000001v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 2.2874999999999996h1.1400000000000001v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 0h2.2800000000000002v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 22.86h2.2800000000000002V24H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 19.424999999999997h1.1400000000000001v1.1475H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 14.857499999999998h1.1400000000000001v2.2874999999999996H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 3.4275h1.1400000000000001V4.574999999999999H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 21.7125h1.1475v1.1475H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 1.1400000000000001h1.1475v1.1475H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 19.424999999999997h1.1400000000000001v2.2874999999999996H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 2.2874999999999996h1.1400000000000001V4.574999999999999H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="match-accept" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.86 5.715H24v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m20.572499999999998 11.43 0 1.1400000000000001 -2.2800000000000002 0 0 1.1475 2.2800000000000002 0 0 6.855 -4.5675 0 0 1.1400000000000001 4.5675 0 0 1.1475 3.4275 0 0 -11.43 -3.4275 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.72 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 5.715h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 1.1475h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.2925 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 11.43h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.005 10.290000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m16.005 17.145 -1.1475 0 0 2.2874999999999996 -2.2800000000000002 0 0 2.2800000000000002 1.1400000000000001 0 0 -1.1400000000000001 2.2874999999999996 0 0 -3.4275z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 16.005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.5775 14.857499999999998h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.5775 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 9.1425h4.574999999999999v1.1475h-4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.5775 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.5775 1.1475h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 18.285h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 13.7175h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 2.2874999999999996h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m10.290000000000001 22.86 -3.4275 0 0 1.1400000000000001 4.5675 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 -2.2874999999999996 0 0 1.1475z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 10.290000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 20.572499999999998h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 14.857499999999998h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 11.43h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 9.1425h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 19.4325h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 12.57h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.862500000000001 10.290000000000001h1.1400000000000001v1.1400000000000001H6.862500000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 21.7125h1.1475v1.1475H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 11.43h1.1475v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m3.435 20.572499999999998 0 -6.855 2.2800000000000002 0 0 -1.1475 -2.2800000000000002 0 0 -1.1400000000000001 -3.435 0 0 11.43 3.435 0 0 -1.1475 2.2800000000000002 0 0 -1.1400000000000001 -2.2800000000000002 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 0h1.1400000000000001v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m3.435 9.1425 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1475 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="alert-follow" viewBox="0 0 24 24">
      <g>
        <path
          d="m15.431249999999999 5.715 1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -2.2874999999999996 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1475 -1.1475 0 0 -1.1475 -1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 1.1400000000000001 -1.1475 0 0 2.2874999999999996 1.1475 0 0 1.1475z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.85625 11.4225h1.1475v6.862500000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.71625 10.2825h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m9.71625 13.71 -1.1475 0 0 2.2874999999999996 -3.4275 0 0 -2.2874999999999996 -1.1400000000000001 0 0 4.574999999999999 -1.1475 0 0 1.1400000000000001 1.1475 0 0 4.574999999999999 2.2874999999999996 0 0 -3.435 1.1400000000000001 0 0 3.435 2.2874999999999996 0 0 -4.574999999999999 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -4.574999999999999z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.568750000000001 9.1425h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.568750000000001 6.855h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.28875 10.2825h1.1400000000000001v3.4275h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.14125 7.995h3.4275v1.1475h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.00125 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.00125 6.855h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.8537500000000002 10.2825h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m5.14125 4.5675 0 -1.1400000000000001 3.4275 0 0 1.1400000000000001 1.1475 0 0 2.2874999999999996 1.1400000000000001 0 0 -4.574999999999999 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 -1.1400000000000001 -3.4275 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1400000000000001 -1.1475 0 0 4.574999999999999 1.1475 0 0 -2.2874999999999996 1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.71375 11.4225h1.1400000000000001v6.862500000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="alert-jandi" viewBox="0 0 24 24">
      <g>
        <path
          d="m22.86 18.285 1.1400000000000001 0 0 -6.855 -1.1400000000000001 0 0 1.1475 -1.1475 0 0 1.1400000000000001 1.1475 0 0 4.5675z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 18.285h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 19.4325h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 16.005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 17.145h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 20.572499999999998h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 13.7175h4.5675v1.1400000000000001h-4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m20.572499999999998 3.4275 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1400000000000001 -1.1475 0 0 -1.1475 -1.1400000000000001 0 0 1.1475 -1.1400000000000001 0 0 -1.1475 -1.1475 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 1.1475 1.1400000000000001 0 0 -1.1475z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 18.285h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 21.72h4.5675v1.1400000000000001h-4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 14.857499999999998h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m10.290000000000001 14.857499999999998 0 1.1475 -3.435 0 0 1.1400000000000001 3.435 0 0 6.855 1.1400000000000001 0 0 -3.4275 1.1400000000000001 0 0 1.1475 1.1475 0 0 -1.1475 2.2800000000000002 0 0 -1.1400000000000001 -3.4275 0 0 -1.1475 -1.1400000000000001 0 0 -2.2800000000000002 1.1400000000000001 0 0 -5.715 -1.1400000000000001 0 0 4.5675 -1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 16.005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m17.145 12.5775 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -2.2800000000000002 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1475 0 0 -1.1475 -2.2800000000000002 0 0 1.1475 -1.1475 0 0 2.2800000000000002 1.1475 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475 1.1475 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 17.145h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 9.1425h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 12.5775h1.1475v2.2800000000000002h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 8.0025h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 11.43h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 10.290000000000001h2.2874999999999996v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 6.862500000000001h2.2874999999999996v1.1400000000000001H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 14.857499999999998h2.2800000000000002v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 9.1425h1.1400000000000001v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 13.7175H4.574999999999999v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 8.0025H4.574999999999999v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 5.715h3.4275v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 11.43h1.1400000000000001v2.2874999999999996H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 4.574999999999999h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 9.1425h1.1475v2.2874999999999996H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m1.1400000000000001 4.574999999999999 1.1475 0 0 -1.1475 -2.2874999999999996 0 0 5.715 1.1400000000000001 0 0 -4.5675z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="match-fail" viewBox="0 0 24 24">
      <g>
        <path
          d="M21.146250000000002 1.1400000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.99875 4.5675h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.99875 2.2800000000000002h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.85875 0h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.85875 3.4275h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.57125 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.431249999999999 9.1425h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.431249999999999 6.855h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.283750000000001 4.5675h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.283750000000001 7.995h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.85625 11.4225h1.1475v6.862500000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.71625 10.2825h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.71625 2.2800000000000002h1.1400000000000001v4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m9.71625 13.71 -1.1475 0 0 9.1425 -1.1400000000000001 0 0 -4.5675 -1.1400000000000001 0 0 4.5675 -1.1475 0 0 -9.1425 -1.1400000000000001 0 0 4.574999999999999 -1.1475 0 0 1.1400000000000001 1.1475 0 0 4.574999999999999 5.715 0 0 -4.574999999999999 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -4.574999999999999z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.568750000000001 9.1425h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.568750000000001 6.855h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.568750000000001 1.1400000000000001h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.14125 7.995h3.4275v1.1475h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.14125 0h3.4275v1.1400000000000001h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.00125 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.00125 6.855h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.00125 1.1400000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.8537500000000002 10.2825h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.8537500000000002 2.2800000000000002h1.1475v4.574999999999999h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.71375 11.4225h1.1400000000000001v6.862500000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="achievement" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.86 6.28875H24v2.2800000000000002h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 10.85625h1.1400000000000001v4.574999999999999H13.7175V16.575000000000003h1.1400000000000001v1.1400000000000001h-1.1400000000000001v1.1475h7.995v2.2874999999999996h1.1475V8.568750000000001h-2.2874999999999996Zm-3.4275 6.855h-1.1475V16.575000000000003h1.1475Zm4.5675 0H19.424999999999997V16.575000000000003h2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m21.7125 7.428749999999999 0 -1.1400000000000001 1.1475 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1475 0 0 2.2800000000000002 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m12.57 21.146250000000002 0 -1.1475 -1.1400000000000001 0 0 1.1475 -9.1425 0 0 1.1400000000000001 19.424999999999997 0 0 -1.1400000000000001 -9.1425 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m15.997499999999999 11.99625 0 1.1475 1.1475 0 0 1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 1.1475 0 0 -1.1400000000000001 -1.1475 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 1.1475 -1.1475 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 9.71625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 2.8537500000000002h1.1400000000000001v3.435h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 18.85875h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 14.283750000000001h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 8.568750000000001h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 16.57125h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 13.143749999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m12.57 7.428749999999999 1.1475 0 0 -1.1400000000000001 -3.435 0 0 1.1400000000000001 1.1475 0 0 1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 4.00125h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 1.71375h3.435v1.1400000000000001h-3.435Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 18.85875h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 14.283750000000001h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 8.568750000000001h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 9.71625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 2.8537500000000002h1.1400000000000001v3.435h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m4.574999999999999 11.99625 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 -1.1475 -1.1400000000000001 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 -1.1475 0 0 1.1400000000000001 1.1475 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m2.2874999999999996 7.428749999999999 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 -2.2800000000000002 -1.1475 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 1.1475 0 0 1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 18.85875v-1.1475h-1.1400000000000001V16.575000000000003h1.1400000000000001v-1.1400000000000001H2.2874999999999996v-4.574999999999999h1.1400000000000001v-2.2874999999999996H1.1400000000000001V21.15h1.1475v-2.2874999999999996ZM6.855 16.575000000000003h1.1475v1.1400000000000001H6.855Zm-4.5675 0H4.574999999999999v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 6.28875h1.1400000000000001v2.2800000000000002H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="rotate" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.3797 8.540099999999999H23.759999999999998V15.4599H22.3797Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.999325 15.4599H22.3797V18.22965H20.999325Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.999325 5.7703500000000005H22.3797V8.540099999999999H20.999325Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M22.3797 4.39005V3.00975H23.759999999999998V1.6203H16.840200000000003V8.540099999999999H18.22965V7.159800000000001H19.609949999999998V5.7703500000000005H20.999325V4.39005H22.3797Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.609949999999998 18.22965H20.999325V19.609949999999998H19.609949999999998Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.22965 19.609949999999998H19.609949999999998V20.999325H18.22965Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.4599 20.999325H18.22965V22.3797H15.4599Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.9204 22.3797H15.4599V23.759999999999998H9.9204Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.540099999999999 0.24H14.0796V1.6203H8.540099999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.7703500000000005 1.6203H8.540099999999999V3.00975H5.7703500000000005Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.39005 3.00975H5.7703500000000005V4.39005H4.39005Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.00975 4.39005H4.39005V5.7703500000000005H3.00975Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.6203 19.609949999999998V20.999325H0.24V22.3797H7.159800000000001V15.4599H5.7703500000000005V16.840200000000003H4.39005V18.22965H3.00975V19.609949999999998H1.6203Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.6203 15.4599H3.00975V18.22965H1.6203Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.6203 5.7703500000000005H3.00975V8.540099999999999H1.6203Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0.24 8.540099999999999H1.6203V15.4599H0.24Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="edit" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.8525 4.574999999999999H24v3.4275h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 8.0025h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 10.2825h1.1475v1.1475H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 8.0025h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 1.1400000000000001h1.1475v1.1475H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 11.43h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 12.57h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 8.0025h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 5.715h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 0h3.4275v1.1400000000000001h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 13.7175h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 14.857499999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 10.2825h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 15.997499999999999h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 11.43h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 6.855h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 2.2874999999999996h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 17.145h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 8.0025h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 18.285h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 13.7175h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 19.424999999999997h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 14.857499999999998h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 10.2825h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.2825 5.715h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 20.572499999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 15.997499999999999h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 11.43h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.995 17.145h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.995 12.57h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.995 8.0025h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.995 22.86h1.1475v-1.1475h-1.1475v-3.4275H5.715v-2.2874999999999996H2.2874999999999996v-1.1400000000000001H1.1400000000000001v1.1400000000000001H0V24h7.995Zm-1.1400000000000001 0H3.4275v-1.1475H2.2874999999999996v-1.1400000000000001H1.1400000000000001v-3.4275h3.4275v2.2800000000000002h2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 13.7175h1.1400000000000001v1.1400000000000001H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 9.1425h1.1400000000000001v1.1400000000000001H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 14.857499999999998h1.1400000000000001v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 10.2825h1.1400000000000001v1.1475H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 11.43h1.1475v1.1400000000000001H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 12.57h1.1400000000000001v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 13.7175h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="info-job" viewBox="0 0 24 24">
      <g>
        <path
          d="m13.713750000000001 4.57125 2.2874999999999996 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475 1.1475 0 0 2.2874999999999996 1.1400000000000001 0 0 5.7075000000000005 -1.1400000000000001 0 0 2.2874999999999996 -1.1475 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 -2.2874999999999996 0 0 1.1400000000000001 -5.715 0 0 1.1475 8.0025 0 0 -1.1475 2.2874999999999996 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -2.2874999999999996 1.1400000000000001 0 0 -5.7075000000000005 -1.1400000000000001 0 0 -2.2874999999999996 -1.1400000000000001 0 0 -1.1475 -1.1475 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -1.1475 -8.0025 0 0 1.1475 5.715 0 0 1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.14125 9.14625h1.1475v5.7075000000000005h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.00125 14.85375h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.00125 7.998749999999999h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.861250000000002 16.00125h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.861250000000002 6.85875h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.713750000000001 17.14125h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.713750000000001 5.71125h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.998749999999999 18.28875h5.715v1.1400000000000001h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57375 12.57375h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57375 9.14625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.998749999999999 4.57125h5.715v1.1400000000000001h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m10.286249999999999 16.00125 0 1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 -1.1475 0 0 -2.2800000000000002 1.1475 0 0 -1.1475 -1.1475 0 0 -2.2800000000000002 1.1475 0 0 -1.1475 -1.1475 0 0 -1.1400000000000001 -1.1400000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0 0 2.2800000000000002 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0 0 2.2800000000000002 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.998749999999999 13.713750000000001h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.998749999999999 9.14625h1.1475v2.2800000000000002h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.71875 19.42875h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.85875 17.14125h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.85875 5.71125h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.71875 3.4312500000000004h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.71875 16.00125h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.71875 6.85875h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.57125 18.28875h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.57125 14.85375h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.57125 7.998749999999999h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.57125 4.57125h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4312500000000004 17.14125h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4312500000000004 9.14625h1.1400000000000001v5.7075000000000005h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4312500000000004 5.71125h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.28375 14.85375h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.28375 6.85875h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1437499999999998 9.14625h1.1400000000000001v5.7075000000000005h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="project-tag" viewBox="0 0 24 24">
      <g>
        <path
          d="M21.7125 6.855H24v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 15.997499999999999H24v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 11.43H24v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 20.572499999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 19.424999999999997h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 9.1425h1.1400000000000001v5.715h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 3.4275h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 14.857499999999998h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 6.855h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.005 21.7125h1.1400000000000001V24h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m16.005 18.285 -1.1475 0 0 1.1400000000000001 2.2874999999999996 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 -2.2800000000000002 0 0 1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.005 0h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 15.997499999999999h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 4.5675h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 19.424999999999997h5.715v1.1475h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 21.7125h1.1400000000000001V24h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 0h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 14.857499999999998h5.715v1.1400000000000001h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 3.4275h5.715v1.1400000000000001h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m8.0025 18.285 0 -1.1400000000000001 -2.2874999999999996 0 0 1.1400000000000001 1.1475 0 0 1.1400000000000001 2.2800000000000002 0 0 -1.1400000000000001 -1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 15.997499999999999h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m9.1425 10.2825 1.1475 0 0 -1.1400000000000001 3.4275 0 0 1.1400000000000001 1.1400000000000001 0 0 4.574999999999999 1.1475 0 0 -6.855 -1.1475 0 0 -1.1475 -5.715 0 0 1.1475 -1.1400000000000001 0 0 6.855 1.1400000000000001 0 0 -4.574999999999999z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.862500000000001 4.5675h2.2800000000000002v1.1475H6.862500000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.862500000000001 21.7125h1.1400000000000001V24H6.862500000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.862500000000001 0h1.1400000000000001v2.2874999999999996H6.862500000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 5.715h1.1475v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 14.857499999999998h1.1400000000000001v2.2874999999999996H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 6.855h1.1400000000000001v2.2874999999999996H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 19.424999999999997H4.574999999999999v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 9.1425H4.574999999999999v5.715H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 3.4275H4.574999999999999v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 20.572499999999998h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 2.2874999999999996h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 15.997499999999999h2.2874999999999996v1.1475H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 11.43h2.2874999999999996v1.1400000000000001H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 6.855h2.2874999999999996v1.1475H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="info-tech" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.86 0h-6.862500000000001v1.1475h-1.1400000000000001v6.855H1.1400000000000001v1.1400000000000001h13.7175v3.435h1.1400000000000001v4.5675H1.1400000000000001V9.1425H0v10.290000000000001h1.1400000000000001v-1.1400000000000001h14.857499999999998v1.1400000000000001h1.1475v-5.715h5.715v-1.1400000000000001H24V1.1475h-1.1400000000000001Zm-4.574999999999999 1.1475h2.2874999999999996v1.1400000000000001h-2.2874999999999996Zm4.574999999999999 10.2825h-6.862500000000001V2.2874999999999996h1.1475v1.1475h4.5675V2.2874999999999996h1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 6.862500000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 8.0025h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 6.862500000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m1.1400000000000001 19.4325 0 1.1400000000000001 4.574999999999999 0 0 1.1475 1.1400000000000001 0 0 -1.1475 3.4275 0 0 1.1475 1.1475 0 0 -1.1475 4.5675 0 0 -1.1400000000000001 -14.857499999999998 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 12.5775h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 13.7175h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 11.43h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 14.857499999999998h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 10.290000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m5.715 22.86 0 -1.1400000000000001 -1.1400000000000001 0 0 2.2800000000000002 7.995 0 0 -2.2800000000000002 -1.1400000000000001 0 0 1.1400000000000001 -5.715 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 10.290000000000001h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 12.5775h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 13.7175h1.1475v2.2874999999999996H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 14.857499999999998h1.1400000000000001v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 10.290000000000001h1.1400000000000001v1.1400000000000001H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 13.7175H4.574999999999999v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 11.43H4.574999999999999v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 12.5775h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="jandi" viewBox="0 0 24 24">
      <g>
        <path
          d="m22.86 18.285 1.1400000000000001 0 0 -6.855 -1.1400000000000001 0 0 1.1475 -1.1475 0 0 1.1400000000000001 1.1475 0 0 4.5675z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 18.285h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 19.4325h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 16.005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 17.145h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 20.572499999999998h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 13.7175h4.5675v1.1400000000000001h-4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m20.572499999999998 3.4275 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1400000000000001 -1.1475 0 0 -1.1475 -1.1400000000000001 0 0 1.1475 -1.1400000000000001 0 0 -1.1475 -1.1475 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 1.1475 1.1400000000000001 0 0 -1.1475z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.997499999999999 18.285h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 21.72h4.5675v1.1400000000000001h-4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 14.857499999999998h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m10.290000000000001 14.857499999999998 0 1.1475 -3.435 0 0 1.1400000000000001 3.435 0 0 6.855 1.1400000000000001 0 0 -3.4275 1.1400000000000001 0 0 1.1475 1.1475 0 0 -1.1475 2.2800000000000002 0 0 -1.1400000000000001 -3.4275 0 0 -1.1475 -1.1400000000000001 0 0 -2.2800000000000002 1.1400000000000001 0 0 -5.715 -1.1400000000000001 0 0 4.5675 -1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 16.005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m17.145 12.5775 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -2.2800000000000002 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1475 0 0 -1.1475 -2.2800000000000002 0 0 1.1475 -1.1475 0 0 2.2800000000000002 1.1475 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475 1.1475 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 17.145h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 9.1425h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 12.5775h1.1475v2.2800000000000002h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 8.0025h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 11.43h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 10.290000000000001h2.2874999999999996v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 6.862500000000001h2.2874999999999996v1.1400000000000001H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 14.857499999999998h2.2800000000000002v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 9.1425h1.1400000000000001v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 13.7175H4.574999999999999v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 8.0025H4.574999999999999v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 5.715h3.4275v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 11.43h1.1400000000000001v2.2874999999999996H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 4.574999999999999h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 9.1425h1.1475v2.2874999999999996H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m1.1400000000000001 4.574999999999999 1.1475 0 0 -1.1475 -2.2874999999999996 0 0 5.715 1.1400000000000001 0 0 -4.5675z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="review-bad" viewBox="0 0 24 24">
      <g>
        <path
          d="m18.28125 1.1400000000000001 0 1.1475 -2.2874999999999996 0 0 1.1400000000000001 2.2874999999999996 0 0 11.43 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475 4.574999999999999 0 0 -16.005 -4.574999999999999 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.85375 15.997499999999999h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.85375 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.713750000000001 17.145h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.56625 18.285h1.1475v4.574999999999999h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.286249999999999 22.86h2.2800000000000002V24h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.286249999999999 14.857499999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.13875 21.7125h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.13875 15.997499999999999h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.42375 13.7175h6.862500000000001v1.1400000000000001h-6.862500000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.998749999999999 17.145h1.1400000000000001v4.5675h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.57125 0h10.2825v1.1400000000000001H4.57125Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m7.998749999999999 4.574999999999999 0 -1.1475 -4.574999999999999 0 0 -1.1400000000000001 -1.1400000000000001 0 0 2.2874999999999996 5.715 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.42375 1.1400000000000001h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.28375 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m6.85125 11.43 0 -1.1475 -4.5675 0 0 -2.2800000000000002 4.5675 0 0 -1.1475 -4.5675 0 0 -2.2800000000000002 -1.1400000000000001 0 0 7.995 1.1400000000000001 0 0 -1.1400000000000001 4.5675 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="review-ok" viewBox="0 0 24 24">
      <g>
        <path
          d="M20.572499999999998 12.57h1.1400000000000001v3.4275h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 9.1425h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 15.997499999999999h1.1475v2.2874999999999996H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 8.0025h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 18.285h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 11.43h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 20.572499999999998H5.715v-1.1400000000000001H4.5675v1.1400000000000001H3.4275V24H19.424999999999997v-3.4275h-1.1400000000000001v-1.1400000000000001h-1.1475Zm0 2.2874999999999996h-2.2800000000000002v-1.1475h2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 12.57h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 10.2825h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 9.1425h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 14.857499999999998h3.4275v1.1400000000000001h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 5.715h4.574999999999999v1.1400000000000001h-4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.71 10.2825h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 11.43h1.1400000000000001v3.4275h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m10.2825 10.2825 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -6.862500000000001 -1.1475 0 0 9.1425z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 10.2825h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.995 0h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 10.2825h1.1400000000000001v2.2874999999999996H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 1.1400000000000001h1.1400000000000001v8.0025H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 0h1.1400000000000001v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 11.43h1.1475v2.2874999999999996H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m4.5675 10.2825 1.1475 0 0 -9.1425 -1.1475 0 0 2.2874999999999996 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0 0 5.7075000000000005z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 17.145h1.1400000000000001v2.2874999999999996H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 4.574999999999999h1.1400000000000001v12.57H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="review-good" viewBox="0 0 24 24">
      <g>
        <path
          d="M7.998749999999999 7.428749999999999h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.85875 21.15V9.71625h1.1400000000000001v-1.1475h-1.1400000000000001V7.425000000000001h-4.574999999999999v15.997499999999999h4.574999999999999v-1.1400000000000001H9.149999999999999V21.15ZM5.71125 12H4.574999999999999v-2.2800000000000002h1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.14625 6.28875h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.286249999999999 1.71375h1.1400000000000001v4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.42625 9.71625h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.42625 0.57375h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57375 8.568750000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57375 13.143749999999999h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57375 16.57125h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.713750000000001 1.71375h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.713750000000001 7.428749999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.85375 2.8537500000000002h1.1475v4.574999999999999h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.85375 8.568750000000001h5.715v1.1475h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m16.00125 21.146250000000002 -1.1475 0 0 1.1400000000000001 -5.7075000000000005 0 0 1.1400000000000001 9.1425 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m13.713750000000001 18.85875 0 2.2874999999999996 1.1400000000000001 0 0 -1.1475 4.574999999999999 0 0 1.1475 1.1400000000000001 0 0 -2.2874999999999996 -6.855 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.28875 21.146250000000002h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m20.56875 11.99625 -5.715 0 0 -2.2800000000000002 -1.1400000000000001 0 0 3.4275 6.855 0 0 2.2874999999999996 -6.855 0 0 1.1400000000000001 6.855 0 0 2.2874999999999996 1.1475 0 0 -9.1425 -1.1475 0 0 2.2800000000000002z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="review-awesome" viewBox="0 0 24 24">
      <g>
        <path
          d="M20.0025 20.572499999999998h1.1400000000000001V24h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.855 19.4325h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.715 20.572499999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.715 18.285h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.5675 21.7125h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.4275 17.145h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.5675 8.0025h1.1475v3.4275h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.4275 22.86h1.1400000000000001V24h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.4275 11.43h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.287500000000001 6.855h2.2800000000000002v1.1475h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.287500000000001 18.285h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.14 15.997499999999999h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.287500000000001 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.14 19.4325h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.14 13.7175h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.14 8.0025h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12 20.572499999999998h1.1400000000000001v1.1400000000000001H12Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12 14.857499999999998h1.1400000000000001v1.1400000000000001H12Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12 9.1425h1.1400000000000001v1.1400000000000001H12Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.86 15.997499999999999H12v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.86 10.2825H12v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.712499999999999 17.145h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.712499999999999 11.43h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.5725 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.5725 9.1425h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.425000000000001 13.7175h1.1475v1.1400000000000001H7.425000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m7.425000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 2.2874999999999996 1.1400000000000001 0 0 1.1475 1.1475 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 1.1475 0 0 -2.2874999999999996 -1.1475 0 0 -1.1400000000000001 -2.2800000000000002 0 0 1.1400000000000001 -1.1475 0 0 -1.1400000000000001L7.425000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.1450000000000005 8.0025h3.4275v1.1400000000000001H5.1450000000000005Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m6.285 12.57 -1.1400000000000001 0 0 4.574999999999999 1.1400000000000001 0 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -2.2874999999999996z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.9975 17.145h1.1475v1.1400000000000001H3.9975Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.9975 9.1425h1.1475v3.4275H3.9975Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.8575 18.285h1.1400000000000001V24H2.8575Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="review-terrible" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.86 12.5775H24v2.2800000000000002h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m22.86 18.2925 0 1.1400000000000001 -1.1475 0 0 -1.1400000000000001 -2.2800000000000002 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475 2.2874999999999996 0 0 -4.574999999999999 -2.2874999999999996 0 0 1.1475 1.1475 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 14.857499999999998h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 22.86H24V24h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 11.43h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 4.574999999999999h1.1400000000000001v5.715h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 16.005h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 12.5775h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.4325 10.290000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 3.435h2.2874999999999996V4.574999999999999h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m19.4325 19.4325 -2.2874999999999996 0 0 2.2874999999999996 -1.1400000000000001 0 0 1.1400000000000001 -3.435 0 0 1.1400000000000001 4.574999999999999 0 0 -1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -2.2874999999999996 -1.1400000000000001 0 0 -1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 17.145h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 11.43h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m18.285 12.5775 -1.1400000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1400000000000001 3.4275 0 0 -1.1400000000000001 -1.1475 0 0 -1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.145 4.574999999999999h1.1400000000000001v3.4275h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.005 18.2925h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.005 8.0025h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 19.4325h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 3.435h1.1475v4.5675h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M13.7175 2.2874999999999996h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m13.7175 21.72 0 -1.1475 -4.574999999999999 0 0 1.1475 1.1475 0 0 1.1400000000000001 2.2800000000000002 0 0 -1.1400000000000001 1.1475 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 11.43h3.4275v1.1475h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M12.57 1.1475h1.1475v1.1400000000000001h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M11.43 4.574999999999999h1.1400000000000001v3.4275h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 0h2.2800000000000002v1.1475h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 12.5775h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 8.0025h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M10.290000000000001 3.435h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 5.715h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 1.1475h1.1475v2.2874999999999996h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 22.86v-1.1400000000000001H5.715v-3.4275H3.4275v-1.1475H1.1475v1.1475H0v3.4275h2.2874999999999996v1.1400000000000001h1.1400000000000001V24H4.574999999999999v-1.1400000000000001h1.1400000000000001V24h4.574999999999999v-1.1400000000000001Zm-4.5675 -2.2874999999999996H1.1475v-1.1400000000000001h1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M8.0025 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 18.2925h1.1475v3.4275H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 8.0025h1.1475v3.4275H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 3.435h1.1475V4.574999999999999H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 17.145h1.1400000000000001v1.1475H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.715 6.862500000000001h1.1400000000000001v1.1400000000000001H5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 2.2874999999999996h2.2800000000000002v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 16.005h2.2874999999999996v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 11.43h2.2800000000000002v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.574999999999999 5.715h1.1400000000000001v1.1475H4.574999999999999Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 9.1425H4.574999999999999v2.2874999999999996H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 3.435H4.574999999999999v2.2800000000000002H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2874999999999996 14.857499999999998h1.1400000000000001v1.1475H2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1475 8.0025h2.2800000000000002v1.1400000000000001H1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1475 13.7175h1.1400000000000001v1.1400000000000001H1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 22.86h2.2874999999999996V24H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 16.005h1.1475v1.1400000000000001H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 9.1425h1.1475v4.574999999999999H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="cancel" viewBox="0 0 24 24">
      <g>
        <path
          d="m18.85875 6.855 0 3.4275 -4.574999999999999 0 0 2.2874999999999996 4.574999999999999 0 0 3.4275 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 1.1400000000000001 0 0 -2.2874999999999996 -1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 -1.1475 -1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.431249999999999 15.997499999999999h1.1400000000000001v4.574999999999999h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M15.431249999999999 1.1400000000000001h1.1400000000000001v5.715h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m10.85625 22.86 0 -1.1475 4.574999999999999 0 0 -1.1400000000000001 -4.574999999999999 0 0 -14.857499999999998 -1.1400000000000001 0 0 17.145 1.1400000000000001 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.28875 22.86h3.4275V24h-3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.428749999999999 12.57h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.428749999999999 4.574999999999999h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.00125 21.7125h2.2874999999999996v1.1475h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.14125 3.4275h2.2874999999999996V4.574999999999999h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.71375 20.572499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.86125 2.2874999999999996h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m1.71375 0 0 1.1400000000000001 -1.1400000000000001 0 0 19.4325 1.1400000000000001 0 0 -18.285 1.1475 0 0 -1.1475 12.57 0 0 -1.1400000000000001 -13.7175 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="follow-empty" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.8525 9.1425H24v5.715h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 14.857499999999998h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 17.145h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 4.5675h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 19.424999999999997h1.1475v1.1475H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 3.4275h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 20.572499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 8.0025h-1.1475V6.855h-3.4275v1.1475h-1.1400000000000001v1.1400000000000001h-1.1475v-1.1400000000000001h-1.1400000000000001V6.855H6.855v1.1475H5.715v1.1400000000000001H4.5675v3.4275h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-3.4275h-1.1400000000000001Zm-1.1475 4.5675h-1.1400000000000001v-2.2874999999999996h-2.2874999999999996v-1.1400000000000001h2.2874999999999996v1.1400000000000001h1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 2.2874999999999996h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 21.7125h2.2800000000000002v1.1475h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 1.1400000000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 22.86h5.715V24h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 0h5.715v1.1400000000000001h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 21.7125h2.2874999999999996v1.1475H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 1.1400000000000001h2.2874999999999996v1.1475H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 20.572499999999998h2.2874999999999996v1.1400000000000001H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 2.2874999999999996h2.2874999999999996v1.1400000000000001H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 19.424999999999997h1.1400000000000001v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 3.4275h1.1400000000000001v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2800000000000002 17.145h1.1475v2.2800000000000002H2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2800000000000002 4.5675h1.1475v2.2874999999999996H2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 14.857499999999998h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 6.855h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 9.1425h1.1400000000000001v5.715H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol id="follow-fulfill" viewBox="0 0 24 24">
      <g>
        <path
          d="M22.8525 9.1425H24v5.715h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 14.857499999999998h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M21.7125 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 17.145h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M20.572499999999998 4.5675h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 19.424999999999997h1.1475v1.1475H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M19.424999999999997 3.4275h1.1475v1.1400000000000001H19.424999999999997Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 20.572499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.285 8.0025h-1.1475V6.855h-3.4275v1.1475h-1.1400000000000001v1.1400000000000001h-1.1475v-1.1400000000000001h-1.1400000000000001V6.855H6.855v1.1475H5.715v1.1400000000000001H4.5675v3.4275h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-3.4275h-1.1400000000000001Zm-1.1475 4.5675h-1.1400000000000001v-2.2874999999999996h-2.2874999999999996v-1.1400000000000001h2.2874999999999996v1.1400000000000001h1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M17.137500000000003 2.2874999999999996h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 21.7125h2.2800000000000002v1.1475h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M14.857499999999998 1.1400000000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 22.86h5.715V24h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M9.1425 0h5.715v1.1400000000000001h-5.715Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 21.7125h2.2874999999999996v1.1475H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.855 1.1400000000000001h2.2874999999999996v1.1475H6.855Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 20.572499999999998h2.2874999999999996v1.1400000000000001H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.5675 2.2874999999999996h2.2874999999999996v1.1400000000000001H4.5675Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 19.424999999999997h1.1400000000000001v1.1475H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4275 3.4275h1.1400000000000001v1.1400000000000001H3.4275Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2800000000000002 17.145h1.1475v2.2800000000000002H2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M2.2800000000000002 4.5675h1.1475v2.2874999999999996H2.2800000000000002Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 14.857499999999998h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M1.1400000000000001 6.855h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M0 9.1425h1.1400000000000001v5.715H0Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </symbol>
    <symbol
      id="carousel-left"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1423_18042)">
        <path
          d="M13.7102 28.1899V26.6699H24.3802V28.1899H13.7102Z"
          fill="#000001"
        />
        <path
          d="M27.4301 25.1399V9.90986H25.9101V8.37986H27.4301V6.85986L32.0001 6.85986V28.1899H27.4301L27.4301 26.6699H24.3801L24.3801 25.1399H27.4301ZM30.4801 25.1399V22.0999H28.9501V25.1399H30.4801Z"
          fill="#000001"
        />
        <path
          d="M12.1902 26.6701V25.1401H13.7102V26.6701H12.1902Z"
          fill="#000001"
        />
        <path
          d="M13.7102 23.6201V22.1001H18.2902V23.6201H13.7102Z"
          fill="#000001"
        />
        <path
          d="M10.6702 25.1401V22.1001H12.1902V25.1401H10.6702Z"
          fill="#000001"
        />
        <path
          d="M13.7102 19.0503V17.5303H18.2902V19.0503H13.7102Z"
          fill="#000001"
        />
        <path
          d="M13.7102 14.4802V12.9502H18.2902V14.4802H13.7102Z"
          fill="#000001"
        />
        <path
          d="M10.6703 12.9502V22.1002H9.14026V14.4802H1.52026L1.52026 12.9502H10.6703Z"
          fill="#000001"
        />
        <path
          d="M0.000244141 12.9502L0.000244141 9.91016H1.52024L1.52024 12.9502H0.000244141Z"
          fill="#000001"
        />
        <path
          d="M19.8103 8.37986V9.90986L1.52026 9.90986V8.37986L12.1903 8.37986V6.85986H13.7103V8.37986H19.8103Z"
          fill="#000001"
        />
        <path
          d="M24.3801 8.37986V6.85986H25.9101V8.37986H24.3801Z"
          fill="#000001"
        />
        <path
          d="M21.3303 6.85984V5.33984H24.3803V6.85984H21.3303Z"
          fill="#000001"
        />
        <path
          d="M13.7102 6.85984V5.33984H15.2402V6.85984H13.7102Z"
          fill="#000001"
        />
        <path
          d="M15.2402 5.34006V3.81006L21.3302 3.81006V5.34006L15.2402 5.34006Z"
          fill="#000001"
        />
      </g>
      <defs>
        <clipPath id="clip0_1423_18042">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      id="carousel-right"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1423_18042)">
        <path
          d="M18.2903 28.1899V26.6699H7.62028V28.1899H18.2903Z"
          fill="#000001"
        />
        <path
          d="M4.57036 25.1399V9.90986H6.09036V8.37986H4.57036V6.85986H0.000360489L0.000360489 28.1899H4.57036V26.6699H7.62036V25.1399H4.57036ZM1.52036 25.1399L1.52036 22.0999H3.05036L3.05036 25.1399H1.52036Z"
          fill="#000001"
        />
        <path
          d="M19.8103 26.6701V25.1401H18.2903V26.6701H19.8103Z"
          fill="#000001"
        />
        <path
          d="M18.2903 23.6201V22.1001H13.7103V23.6201H18.2903Z"
          fill="#000001"
        />
        <path
          d="M21.3303 25.1401V22.1001H19.8103V25.1401H21.3303Z"
          fill="#000001"
        />
        <path
          d="M18.2903 19.0503V17.5303H13.7103V19.0503H18.2903Z"
          fill="#000001"
        />
        <path
          d="M18.2903 14.4802V12.9502H13.7103V14.4802H18.2903Z"
          fill="#000001"
        />
        <path
          d="M21.3302 12.9502V22.1002H22.8602V14.4802H30.4802V12.9502H21.3302Z"
          fill="#000001"
        />
        <path
          d="M32.0002 12.9502V9.91016H30.4802V12.9502H32.0002Z"
          fill="#000001"
        />
        <path
          d="M12.1902 8.37986V9.90986H30.4802V8.37986H19.8102V6.85986H18.2902V8.37986H12.1902Z"
          fill="#000001"
        />
        <path
          d="M7.62036 8.37986V6.85986H6.09036V8.37986H7.62036Z"
          fill="#000001"
        />
        <path
          d="M10.6702 6.85984V5.33984H7.62017V6.85984H10.6702Z"
          fill="#000001"
        />
        <path
          d="M18.2903 6.85984V5.33984H16.7603V6.85984H18.2903Z"
          fill="#000001"
        />
        <path
          d="M16.7603 5.34006V3.81006H10.6703V5.34006H16.7603Z"
          fill="#000001"
        />
      </g>
      <defs>
        <clipPath id="clip0_1423_18042">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      id="hand-pointer-right"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1423_17739)">
        <path
          d="M13.71 23.6201H12.19V26.6701H7.62004V28.1901H18.29V26.6701H13.71V23.6201Z"
          fill="#000001"
        />
        <path
          d="M4.57012 25.1399L4.57012 9.90986H6.09012V8.37986H4.57012V6.85986L0.000116348 6.85986L0.000116348 28.1899H4.57012V26.6699H7.62012V25.1399H4.57012ZM1.52012 25.1399V22.0999H3.05012V25.1399H1.52012Z"
          fill="#000001"
        />
        <path
          d="M19.8101 26.6701V25.1401H18.2901V26.6701H19.8101Z"
          fill="#000001"
        />
        <path
          d="M13.7101 22.1001V23.6201H19.8101V25.1401H21.3301V22.1001H13.7101Z"
          fill="#000001"
        />
        <path d="M13.71 22.1003V19.0503H12.19V22.1003H13.71Z" fill="#000001" />
        <path
          d="M12.1899 16.0002V11.4302H10.6699V16.0002H12.1899Z"
          fill="#000001"
        />
        <path
          d="M18.29 12.9502V11.4302H16.76V14.4802H21.33V17.5302H16.76V14.4802H15.24V16.0002H12.19V17.5302H13.71V19.0502H21.33V22.1002H22.86V14.4802H30.48V12.9502H18.29Z"
          fill="#000001"
        />
        <path d="M32 12.9502V9.91016H30.48V12.9502H32Z" fill="#000001" />
        <path d="M13.71 11.4302V9.91016H12.19V11.4302H13.71Z" fill="#000001" />
        <path
          d="M18.29 11.4299H19.81V9.90986H30.48V8.37986H19.81V6.85986H18.29V11.4299Z"
          fill="#000001"
        />
        <path
          d="M7.62012 8.37986V6.85986H6.09012V8.37986H7.62012Z"
          fill="#000001"
        />
        <path
          d="M10.6699 6.85984V5.33984H7.61992V6.85984H10.6699Z"
          fill="#000001"
        />
        <path d="M18.29 6.85984V5.33984H16.76V6.85984H18.29Z" fill="#000001" />
        <path
          d="M16.7598 5.34006V3.81006L10.6698 3.81006V5.34006H16.7598Z"
          fill="#000001"
        />
      </g>
      <defs>
        <clipPath id="clip0_1423_17739">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      id="hand-ok"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.9497 16.7598H27.4297V21.3298H28.9497V16.7598Z"
        fill="#000001"
      />
      <path
        d="M28.9497 12.1899H27.4297V15.2399H28.9497V12.1899Z"
        fill="#000001"
      />
      <path
        d="M27.4299 21.3301H25.8999V24.3801H27.4299V21.3301Z"
        fill="#000001"
      />
      <path
        d="M27.4299 10.6699H25.8999V12.1899H27.4299V10.6699Z"
        fill="#000001"
      />
      <path
        d="M25.8999 24.3799H24.3799V25.9099H25.8999V24.3799Z"
        fill="#000001"
      />
      <path
        d="M27.4299 15.2402H24.3799V16.7602H27.4299V15.2402Z"
        fill="#000001"
      />
      <path
        d="M25.8999 9.14014H24.3799V10.6701H25.8999V9.14014Z"
        fill="#000001"
      />
      <path
        d="M22.8498 27.4302H7.61982V25.9102H6.08982V27.4302H4.56982V32.0002H25.8998V27.4302H24.3798V25.9102H22.8498V27.4302ZM22.8498 30.4802H19.8098V28.9502H22.8498V30.4802Z"
        fill="#000001"
      />
      <path
        d="M24.3796 16.7598H22.8496V19.8098H24.3796V16.7598Z"
        fill="#000001"
      />
      <path d="M24.3796 13.71H22.8496V15.24H24.3796V13.71Z" fill="#000001" />
      <path
        d="M22.8496 12.1899H19.8096V13.7099H22.8496V12.1899Z"
        fill="#000001"
      />
      <path
        d="M22.8498 19.8101H18.2798V21.3301H22.8498V19.8101Z"
        fill="#000001"
      />
      <path
        d="M24.3798 7.62012H18.2798V9.14012H24.3798V7.62012Z"
        fill="#000001"
      />
      <path d="M19.8098 13.71H18.2798V15.24H19.8098V13.71Z" fill="#000001" />
      <path
        d="M18.2798 15.2402H16.7598V19.8102H18.2798V15.2402Z"
        fill="#000001"
      />
      <path
        d="M18.2798 9.14014H16.7598V10.6701H18.2798V9.14014Z"
        fill="#000001"
      />
      <path
        d="M13.71 13.71H15.24V12.19H16.76V10.67H15.24V1.52002H13.71V13.71Z"
        fill="#000001"
      />
      <path d="M13.7099 13.71H12.1899V16.76H13.7099V13.71Z" fill="#000001" />
      <path d="M13.7097 0H10.6597V1.52H13.7097V0Z" fill="#000001" />
      <path d="M10.6596 13.71H9.13965V16.76H10.6596V13.71Z" fill="#000001" />
      <path
        d="M10.6596 1.52002H9.13965V12.19H10.6596V1.52002Z"
        fill="#000001"
      />
      <path d="M9.13963 0H7.61963V1.52H9.13963V0Z" fill="#000001" />
      <path
        d="M7.61984 15.2402H6.08984V18.2902H7.61984V15.2402Z"
        fill="#000001"
      />
      <path
        d="M6.08982 13.71H7.61982V1.52002H6.08982V4.57002H4.56982V6.10002H6.08982V13.71Z"
        fill="#000001"
      />
      <path
        d="M6.08982 22.8599H4.56982V25.9099H6.08982V22.8599Z"
        fill="#000001"
      />
      <path d="M4.5698 6.1001H3.0498V22.8601H4.5698V6.1001Z" fill="#000001" />
    </symbol>
    <symbol
      id="toast-success"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9991 11.8486H23.6865V13.1612H24.9991V11.8486Z"
        fill="white"
      />
      <path
        d="M23.6875 13.1606H22.3662V14.4733H23.6875V13.1606Z"
        fill="white"
      />
      <path
        d="M23.6875 10.5269H22.3662V11.8481H23.6875V10.5269Z"
        fill="white"
      />
      <path
        d="M22.3663 14.4731H21.0537V15.7944H22.3663V14.4731Z"
        fill="white"
      />
      <path d="M22.3663 9.21436H21.0537V10.527H22.3663V9.21436Z" fill="white" />
      <path
        d="M19.7422 19.7409H15.7871V21.0535H21.0549V15.7944H19.7422V19.7409Z"
        fill="white"
      />
      <path
        d="M11.8402 13.1613H10.5276V11.8487H9.2063V10.5274H7.89368V11.8487H6.58105V13.1613H7.89368V14.4739H9.2063V15.7951H10.5276V17.1078H11.8402V15.7951H13.1614V14.4739H14.4741V13.1613H15.7867V11.8487H17.1079V10.5274H18.4206V9.2148H17.1079V7.89355H15.7867V9.2148H14.4741V10.5274H13.1614V11.8487H11.8402V13.1613Z"
        fill="white"
      />
      <path
        d="M19.7422 5.26705V9.21353H21.0549V3.9458H15.7871V5.26705H19.7422Z"
        fill="white"
      />
      <path d="M15.7863 21.0537H14.4736V22.375H15.7863V21.0537Z" fill="white" />
      <path d="M15.7863 2.63379H14.4736V3.9464H15.7863V2.63379Z" fill="white" />
      <path d="M14.4738 22.375H13.1611V23.6876H14.4738V22.375Z" fill="white" />
      <path d="M14.4738 1.3208H13.1611V2.63341H14.4738V1.3208Z" fill="white" />
      <path
        d="M13.1611 23.6875H11.8398V25.0001H13.1611V23.6875Z"
        fill="white"
      />
      <path d="M13.1611 0H11.8398V1.32125H13.1611V0Z" fill="white" />
      <path d="M11.839 22.375H10.5264V23.6876H11.839V22.375Z" fill="white" />
      <path d="M11.839 1.3208H10.5264V2.63341H11.839V1.3208Z" fill="white" />
      <path d="M10.5263 21.0537H9.20508V22.375H10.5263V21.0537Z" fill="white" />
      <path d="M10.5263 2.63379H9.20508V3.9464H10.5263V2.63379Z" fill="white" />
      <path
        d="M5.25989 19.7409V15.7944H3.94727V21.0535H9.20639V19.7409H5.25989Z"
        fill="white"
      />
      <path
        d="M5.25989 5.26705H9.20639V3.9458H3.94727V9.21353H5.25989V5.26705Z"
        fill="white"
      />
      <path
        d="M3.94641 14.4731H2.63379V15.7944H3.94641V14.4731Z"
        fill="white"
      />
      <path d="M3.94641 9.21436H2.63379V10.527H3.94641V9.21436Z" fill="white" />
      <path d="M2.63376 13.1606H1.3125V14.4733H2.63376V13.1606Z" fill="white" />
      <path d="M2.63376 10.5269H1.3125V11.8481H2.63376V10.5269Z" fill="white" />
      <path d="M1.31262 11.8486H0V13.1612H1.31262V11.8486Z" fill="white" />
    </symbol>
    <symbol
      id="toast-error"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1356_3656)">
        <path
          d="M22.9997 8.76172H21.9072V14.2386H22.9997V8.76172Z"
          fill="white"
        />
        <path
          d="M21.9073 14.2383H20.8076V16.4305H21.9073V14.2383Z"
          fill="white"
        />
        <path
          d="M21.9073 6.56934H20.8076V8.76152H21.9073V6.56934Z"
          fill="white"
        />
        <path
          d="M20.8073 16.4307H19.7148V18.6157H20.8073V16.4307Z"
          fill="white"
        />
        <path
          d="M20.8073 4.37695H19.7148V6.56914H20.8073V4.37695Z"
          fill="white"
        />
        <path
          d="M19.7149 18.6157H18.6152V19.7154H19.7149V18.6157Z"
          fill="white"
        />
        <path
          d="M19.7149 3.28467H18.6152V4.37717H19.7149V3.28467Z"
          fill="white"
        />
        <path
          d="M18.6157 19.7153H16.4307V20.8078H18.6157V19.7153Z"
          fill="white"
        />
        <path
          d="M18.6157 2.19238H16.4307V3.28488H18.6157V2.19238Z"
          fill="white"
        />
        <path
          d="M16.4305 20.8076H14.2383V21.9073H16.4305V20.8076Z"
          fill="white"
        />
        <path
          d="M16.4305 1.09229H14.2383V2.19197H16.4305V1.09229Z"
          fill="white"
        />
        <path
          d="M14.2386 21.9077H8.76172V23.0002H14.2386V21.9077Z"
          fill="white"
        />
        <path
          d="M13.1461 14.2383H9.85422V15.3308H8.76172V18.6155H9.85422V19.7152H13.1461V18.6155H14.2386V15.3308H13.1461V14.2383Z"
          fill="white"
        />
        <path
          d="M13.1461 3.28467H9.85422V4.37717H8.76172V10.9537H9.85422V13.1459H13.1461V10.9537H14.2386V4.37717H13.1461V3.28467Z"
          fill="white"
        />
        <path d="M14.2386 0H8.76172V1.0925H14.2386V0Z" fill="white" />
        <path
          d="M8.76152 20.8076H6.56934V21.9073H8.76152V20.8076Z"
          fill="white"
        />
        <path
          d="M8.76152 1.09229H6.56934V2.19197H8.76152V1.09229Z"
          fill="white"
        />
        <path
          d="M6.56914 19.7153H4.37695V20.8078H6.56914V19.7153Z"
          fill="white"
        />
        <path
          d="M6.56914 2.19238H4.37695V3.28488H6.56914V2.19238Z"
          fill="white"
        />
        <path
          d="M4.37766 18.6157H3.28516V19.7154H4.37766V18.6157Z"
          fill="white"
        />
        <path
          d="M4.37766 3.28467H3.28516V4.37717H4.37766V3.28467Z"
          fill="white"
        />
        <path
          d="M3.28488 16.4307H2.19238V18.6157H3.28488V16.4307Z"
          fill="white"
        />
        <path
          d="M3.28488 4.37695H2.19238V6.56914H3.28488V4.37695Z"
          fill="white"
        />
        <path
          d="M2.19246 14.2383H1.09277V16.4305H2.19246V14.2383Z"
          fill="white"
        />
        <path
          d="M2.19246 6.56934H1.09277V8.76152H2.19246V6.56934Z"
          fill="white"
        />
        <path d="M1.0925 8.76172H0V14.2386H1.0925V8.76172Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1356_3656">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      id="toast-warning"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1356_3630)">
        <path
          d="M22.9997 19.7153H21.9072V21.9075H22.9997V19.7153Z"
          fill="white"
        />
        <path
          d="M21.9073 17.5229H20.8076V19.7151H21.9073V17.5229Z"
          fill="white"
        />
        <path
          d="M21.9078 21.9077H1.09277V23.0002H21.9078V21.9077Z"
          fill="white"
        />
        <path
          d="M20.8073 15.3311H19.7148V17.5232H20.8073V15.3311Z"
          fill="white"
        />
        <path d="M19.7149 13.146H18.6152V15.331H19.7149V13.146Z" fill="white" />
        <path
          d="M18.6159 10.9536H17.5234V13.1458H18.6159V10.9536Z"
          fill="white"
        />
        <path
          d="M17.5232 8.76172H16.4307V10.9539H17.5232V8.76172Z"
          fill="white"
        />
        <path
          d="M16.4307 6.56934H15.3311V8.76152H16.4307V6.56934Z"
          fill="white"
        />
        <path
          d="M15.3308 4.37695H14.2383V6.56914H15.3308V4.37695Z"
          fill="white"
        />
        <path
          d="M14.238 2.19238H13.1455V4.37738H14.238V2.19238Z"
          fill="white"
        />
        <path
          d="M13.1461 15.3311H9.85422V16.4307H8.76172V19.7154H9.85422V20.8079H13.1461V19.7154H14.2386V16.4307H13.1461V15.3311Z"
          fill="white"
        />
        <path
          d="M13.1461 6.56934H9.85422V7.66902H8.76172V12.0462H9.85422V14.2384H13.1461V12.0462H14.2386V7.66902H13.1461V6.56934ZM13.1461 10.9537H12.0464V8.76152H10.9539V7.66902H12.0464V8.76152H13.1461V10.9537Z"
          fill="white"
        />
        <path
          d="M13.1456 1.09229H12.0459V2.19197H13.1456V1.09229Z"
          fill="white"
        />
        <path d="M12.0466 0H10.9541V1.0925H12.0466V0Z" fill="white" />
        <path
          d="M10.9542 1.09229H9.85449V2.19197H10.9542V1.09229Z"
          fill="white"
        />
        <path
          d="M9.85422 2.19238H8.76172V4.37738H9.85422V2.19238Z"
          fill="white"
        />
        <path
          d="M8.76144 4.37695H7.66895V6.56914H8.76144V4.37695Z"
          fill="white"
        />
        <path
          d="M7.66902 6.56934H6.56934V8.76152H7.66902V6.56934Z"
          fill="white"
        />
        <path
          d="M6.56906 8.76172H5.47656V10.9539H6.56906V8.76172Z"
          fill="white"
        />
        <path
          d="M5.47664 10.9536H4.37695V13.1458H5.47664V10.9536Z"
          fill="white"
        />
        <path d="M4.37766 13.146H3.28516V15.331H4.37766V13.146Z" fill="white" />
        <path
          d="M3.28488 15.3311H2.19238V17.5232H3.28488V15.3311Z"
          fill="white"
        />
        <path
          d="M2.19246 17.5229H1.09277V19.7151H2.19246V17.5229Z"
          fill="white"
        />
        <path d="M1.0925 19.7153H0V21.9075H1.0925V19.7153Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1356_3630">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <symbol
      id="toast-info"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1356_4479)">
        <path
          d="M22.9997 8.76172H21.9072V14.2386H22.9997V8.76172Z"
          fill="white"
        />
        <path
          d="M21.9073 14.2383H20.8076V16.4305H21.9073V14.2383Z"
          fill="white"
        />
        <path
          d="M21.9073 6.56934H20.8076V8.76152H21.9073V6.56934Z"
          fill="white"
        />
        <path
          d="M20.8073 16.4307H19.7148V18.6157H20.8073V16.4307Z"
          fill="white"
        />
        <path
          d="M20.8073 4.37695H19.7148V6.56914H20.8073V4.37695Z"
          fill="white"
        />
        <path
          d="M19.7149 18.6157H18.6152V19.7154H19.7149V18.6157Z"
          fill="white"
        />
        <path
          d="M19.7149 3.28467H18.6152V4.37717H19.7149V3.28467Z"
          fill="white"
        />
        <path
          d="M18.6157 19.7153H16.4307V20.8078H18.6157V19.7153Z"
          fill="white"
        />
        <path
          d="M18.6157 2.19238H16.4307V3.28488H18.6157V2.19238Z"
          fill="white"
        />
        <path
          d="M16.4305 20.8076H14.2383V21.9073H16.4305V20.8076Z"
          fill="white"
        />
        <path
          d="M15.3311 16.4306H14.2386V10.9537H13.1461V9.854H9.85422V10.9537H8.76172V18.6156H9.85422V19.7153H15.3311V18.6156H16.4308V17.5231H15.3311V16.4306Z"
          fill="white"
        />
        <path
          d="M16.4305 1.09229H14.2383V2.19197H16.4305V1.09229Z"
          fill="white"
        />
        <path
          d="M14.2386 21.9077H8.76172V23.0002H14.2386V21.9077Z"
          fill="white"
        />
        <path
          d="M9.85422 8.76154H13.1461V7.66904H14.2386V4.37717H13.1461V3.28467H9.85422V4.37717H8.76172V7.66904H9.85422V8.76154Z"
          fill="white"
        />
        <path d="M14.2386 0H8.76172V1.0925H14.2386V0Z" fill="white" />
        <path
          d="M8.76152 20.8076H6.56934V21.9073H8.76152V20.8076Z"
          fill="white"
        />
        <path
          d="M8.76152 1.09229H6.56934V2.19197H8.76152V1.09229Z"
          fill="white"
        />
        <path
          d="M6.56914 19.7153H4.37695V20.8078H6.56914V19.7153Z"
          fill="white"
        />
        <path
          d="M6.56914 2.19238H4.37695V3.28488H6.56914V2.19238Z"
          fill="white"
        />
        <path
          d="M4.37766 18.6157H3.28516V19.7154H4.37766V18.6157Z"
          fill="white"
        />
        <path
          d="M4.37766 3.28467H3.28516V4.37717H4.37766V3.28467Z"
          fill="white"
        />
        <path
          d="M3.28488 16.4307H2.19238V18.6157H3.28488V16.4307Z"
          fill="white"
        />
        <path
          d="M3.28488 4.37695H2.19238V6.56914H3.28488V4.37695Z"
          fill="white"
        />
        <path
          d="M2.19246 14.2383H1.09277V16.4305H2.19246V14.2383Z"
          fill="white"
        />
        <path
          d="M2.19246 6.56934H1.09277V8.76152H2.19246V6.56934Z"
          fill="white"
        />
        <path d="M1.0925 8.76172H0V14.2386H1.0925V8.76172Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1356_4479">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </symbol>
    <svg viewBox="0 0 24 24" id="question-mark-fill">
      <path
        d="M22.86 6.855h-1.1475V4.5675h-1.1400000000000001V3.4275H19.424999999999997V2.2874999999999996h-2.2800000000000002V1.1400000000000001h-2.2874999999999996V0h-5.715v1.1400000000000001H6.855v1.1475H4.5675v1.1400000000000001H3.4275v1.1400000000000001H2.2874999999999996v2.2874999999999996H1.1400000000000001v2.2874999999999996H0v5.715h1.1400000000000001v2.2874999999999996h1.1475v2.2800000000000002h1.1400000000000001v1.1475h1.1400000000000001v1.1400000000000001h2.2874999999999996v1.1475h2.2874999999999996V24h5.715v-1.1400000000000001h2.2874999999999996v-1.1475h2.2800000000000002v-1.1400000000000001h1.1475V19.424999999999997h1.1400000000000001v-2.2800000000000002h1.1475v-2.2874999999999996H24v-5.715h-1.1400000000000001ZM14.857499999999998 19.424999999999997h-1.1400000000000001v1.1475h-3.435V19.424999999999997h-1.1400000000000001v-3.4275h1.1400000000000001v-1.1400000000000001h3.435v1.1400000000000001h1.1400000000000001Zm3.4275 -10.2825h-1.1400000000000001v1.1400000000000001h-1.1475v1.1475h-1.1400000000000001v1.1400000000000001h-1.1400000000000001v1.1475h-3.435v-2.2874999999999996h1.1475v-1.1475h1.1400000000000001v-1.1400000000000001h1.1475V6.855h-1.1475V5.715h-2.2874999999999996v1.1400000000000001h-1.1400000000000001v2.2874999999999996H5.715V5.715h1.1400000000000001V4.5675h1.1475V3.4275h1.1400000000000001V2.2874999999999996h5.715v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v1.1475h1.1400000000000001Z"
        fill="currentColor"
        strokeWidth="1"
      ></path>
    </svg>
    <svg viewBox="0 0 24 24" id="lock">
      <g>
        <path
          d="M19.42875 10.2825h1.1400000000000001v11.43h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M18.28125 21.7125h1.1475v1.1475h-1.1475Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M5.71125 22.86h12.57V24H5.71125Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M16.00125 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m13.713750000000001 14.857499999999998 -1.1400000000000001 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 -3.4275 0 0 1.1475 -1.1475 0 0 2.2800000000000002 1.1475 0 0 1.1475 1.1400000000000001 0 0 3.4275 1.1475 0 0 -3.4275 1.1400000000000001 0 0 -1.1475 1.1400000000000001 0 0 -2.2800000000000002 -1.1400000000000001 0 0 1.1400000000000001z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M7.998749999999999 0h8.0025v1.1400000000000001h-8.0025Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M6.85875 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="m19.42875 10.2825 0 -1.1400000000000001 -1.1475 0 0 -6.855 -1.1400000000000001 0 0 6.855 -10.2825 0 0 -6.855 -1.1475 0 0 6.855 -1.1400000000000001 0 0 1.1400000000000001 14.857499999999998 0z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M4.57125 21.7125h1.1400000000000001v1.1475h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
        <path
          d="M3.4312500000000004 10.2825h1.1400000000000001v11.43h-1.1400000000000001Z"
          fill="currentColor"
          strokeWidth="1"
        ></path>
      </g>
    </svg>
    <svg id="chevron-down" viewBox="0 0 24 24">
      <path
        d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"
        fill="currentColor"
      />
    </svg>
    <svg viewBox="0 0 16 124" id="vertical-logo">
      <path
        d="M0 15.75V0H4.5V2.25H6.75V4.5H9V2.25H11.25V0H15.75V15.75H11.25V6.75H9V11.25H6.75V6.75H4.5V15.75H0ZM2.25 33.75V31.5H0V20.25H2.25V18H13.5V20.25H15.75V31.5H13.5V33.75H2.25ZM4.5 31.5H11.25V20.25H4.5V31.5ZM4.5 51.75V49.5H2.25V47.25H0V40.5H2.25V38.25H4.5V36H15.75V38.25H6.75V40.5H4.5V47.25H6.75V49.5H11.25V45H9V42.75H15.75V51.75H4.5ZM0 69.75V58.5H2.25V56.25H4.5V54H11.25V56.25H13.5V58.5H15.75V69.75H11.25V65.25H4.5V69.75H0ZM4.5 63H11.25V58.5H9V56.25H6.75V58.5H4.5V63ZM0 87.75V72H4.5V78.75H6.75V76.5H9V74.25H11.25V72H15.75V74.25H13.5V76.5H11.25V78.75H9V81H11.25V83.25H13.5V85.5H15.75V87.75H9V85.5H6.75V83.25H4.5V87.75H0ZM4.5 105.75V103.5H2.25V101.25H0V94.5H2.25V92.25H4.5V90H15.75V92.25H6.75V94.5H4.5V101.25H6.75V103.5H11.25V99H9V96.75H15.75V105.75H4.5ZM2.25 123.75V121.5H0V110.25H2.25V108H13.5V110.25H15.75V121.5H13.5V123.75H2.25ZM4.5 121.5H11.25V110.25H4.5V121.5Z"
        fill="currentColor"
      />
    </svg>
    <svg viewBox="0 0 164 76" id="main-logo">
      <path
        d="M0.730469 0.5H8.23047V3H10.7305V5.5H15.7305V3H18.2305V0.5H25.7305V35.5H18.2305V13H15.7305V25.5H10.7305V13H8.23047V35.5H0.730469V0.5ZM40.457 0.5H55.457V3H57.957V5.5H60.457V30.5H57.957V33H55.457V35.5H40.457V33H37.957V30.5H35.457V5.5H37.957V3H40.457V0.5ZM45.457 8V10.5H42.957V25.5H45.457V28H50.457V25.5H52.957V10.5H50.457V8H45.457ZM74.168 0.5H89.168V3H91.668V5.5H94.168V13H86.668V10.5H84.168V8H79.168V10.5H76.668V25.5H79.168V28H84.168V25.5H86.668V23H81.668V20.5H79.168V15.5H91.668V18H94.168V30.5H91.668V33H89.168V35.5H74.168V33H71.668V30.5H69.168V5.5H71.668V3H74.168V0.5ZM108.074 0.5H123.074V3H125.574V5.5H128.074V35.5H123.074V33H120.574V25.5H110.574V35.5H103.074V5.5H105.574V3H108.074V0.5ZM113.074 8V10.5H110.574V18H120.574V10.5H118.074V8H113.074ZM140.77 0.5H145.77V13H148.27V10.5H150.77V8H153.27V5.5H155.77V0.5H163.27V8H160.77V10.5H158.27V13H155.77V15.5H153.27V20.5H155.77V23H158.27V25.5H160.77V28H163.27V35.5H155.77V30.5H153.27V28H150.77V25.5H148.27V23H145.77V35.5H138.27V3H140.77V0.5ZM57.6445 40.5H72.6445V43H75.1445V45.5H77.6445V53H70.1445V50.5H67.6445V48H62.6445V50.5H60.1445V65.5H62.6445V68H67.6445V65.5H70.1445V63H65.1445V60.5H62.6445V55.5H75.1445V58H77.6445V70.5H75.1445V73H72.6445V75.5H57.6445V73H55.1445V70.5H52.6445V45.5H55.1445V43H57.6445V40.5ZM91.3555 40.5H106.355V43H108.855V45.5H111.355V70.5H108.855V73H106.355V75.5H91.3555V73H88.8555V70.5H86.3555V45.5H88.8555V43H91.3555V40.5ZM96.3555 48V50.5H93.8555V65.5H96.3555V68H101.355V65.5H103.855V50.5H101.355V48H96.3555Z"
        fill="currentColor"
      />
    </svg>
  </svg>
);

function SVGProvider() {
  return createPortal(spriteSVGCode, document.body);
}

export default WithOnMounted(SVGProvider);
