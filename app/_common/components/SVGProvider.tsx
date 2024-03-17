"use client";

import { createPortal } from "react-dom";

import WithOnMounted from "../hoc/WithOnMounted";

const spriteSVGCode = (
  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
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
    <symbol id="carousel-left" viewBox="0 0 24 24">
      <g>
        <path
          d="M13.71 24.3804L13.71 22.8604L24.38 22.8604L24.38 24.3804L13.71 24.3804Z"
          fill="currentColor"
        />
        <path
          d="M27.4299 21.3298L27.4299 6.0998L25.9099 6.0998L25.9099 4.5698L27.4299 4.5698L27.4299 3.0498L31.9999 3.0498L31.9999 24.3798L27.4299 24.3798L27.4299 22.8598L24.3799 22.8598L24.3799 21.3298L27.4299 21.3298ZM30.4799 21.3298L30.4799 18.2898L28.9499 18.2898L28.9499 21.3298L30.4799 21.3298Z"
          fill="currentColor"
        />
        <path
          d="M12.1904 22.8601L12.1904 21.3301L13.7104 21.3301L13.7104 22.8601L12.1904 22.8601Z"
          fill="currentColor"
        />
        <path
          d="M13.71 19.81L13.71 18.29L18.29 18.29L18.29 19.81L13.71 19.81Z"
          fill="currentColor"
        />
        <path
          d="M10.6699 21.33L10.6699 18.29L12.1899 18.29L12.1899 21.33L10.6699 21.33Z"
          fill="currentColor"
        />
        <path
          d="M13.71 15.2397L13.71 13.7197L18.29 13.7197L18.29 15.2397L13.71 15.2397Z"
          fill="currentColor"
        />
        <path
          d="M13.71 10.6696L13.71 9.13965L18.29 9.13965L18.29 10.6696L13.71 10.6696Z"
          fill="currentColor"
        />
        <path
          d="M10.6695 9.13965L10.6695 18.2896L9.13953 18.2896L9.13953 10.6696L1.51953 10.6696L1.51953 9.13965L10.6695 9.13965Z"
          fill="currentColor"
        />
        <path
          d="M1.32883e-07 9.13961L0 6.09961L1.52 6.09961L1.52 9.13961L1.32883e-07 9.13961Z"
          fill="currentColor"
        />
        <path
          d="M19.8095 4.5698L19.8095 6.0998L1.51953 6.0998L1.51953 4.5698L12.1895 4.5698L12.1895 3.0498L13.7095 3.0498L13.7095 4.5698L19.8095 4.5698Z"
          fill="currentColor"
        />
        <path
          d="M24.3799 4.5698L24.3799 3.0498L25.9099 3.0498L25.9099 4.5698L24.3799 4.5698Z"
          fill="currentColor"
        />
        <path
          d="M21.3301 3.05027L21.3301 1.53027L24.3801 1.53027L24.3801 3.05027L21.3301 3.05027Z"
          fill="currentColor"
        />
        <path
          d="M13.71 3.05027L13.71 1.53027L15.24 1.53027L15.24 3.05027L13.71 3.05027Z"
          fill="currentColor"
        />
        <path
          d="M15.2402 1.53L15.2402 0L21.3302 -2.66202e-07L21.3302 1.53L15.2402 1.53Z"
          fill="currentColor"
        />
      </g>
    </symbol>
    <symbol id="carousel-right" viewBox="0 0 24 24">
      <g>
        <path
          d="M18.29 24.3804L18.29 22.8604L7.62004 22.8604L7.62004 24.3804L18.29 24.3804Z"
          fill="currentColor"
        />
        <path
          d="M4.57012 21.3298L4.57012 6.0998L6.09012 6.0998L6.09012 4.5698L4.57012 4.5698L4.57012 3.0498L0.000116348 3.0498L0.000115416 24.3798L4.57012 24.3798L4.57012 22.8598L7.62012 22.8598L7.62012 21.3298L4.57012 21.3298ZM1.52012 21.3298L1.52012 18.2898L3.05011 18.2898L3.05011 21.3298L1.52012 21.3298Z"
          fill="currentColor"
        />
        <path
          d="M19.8096 22.8601L19.8096 21.3301L18.2896 21.3301L18.2896 22.8601L19.8096 22.8601Z"
          fill="currentColor"
        />
        <path
          d="M18.29 19.81L18.29 18.29L13.71 18.29L13.71 19.81L18.29 19.81Z"
          fill="currentColor"
        />
        <path
          d="M21.3301 21.33L21.3301 18.29L19.8101 18.29L19.8101 21.33L21.3301 21.33Z"
          fill="currentColor"
        />
        <path
          d="M18.29 15.2397L18.29 13.7197L13.71 13.7197L13.71 15.2397L18.29 15.2397Z"
          fill="currentColor"
        />
        <path
          d="M18.29 10.6696L18.29 9.13965L13.71 9.13965L13.71 10.6696L18.29 10.6696Z"
          fill="currentColor"
        />
        <path
          d="M21.3305 9.13965L21.3305 18.2896L22.8605 18.2896L22.8605 10.6696L30.4805 10.6696L30.4805 9.13965L21.3305 9.13965Z"
          fill="currentColor"
        />
        <path
          d="M32 9.13961L32 6.09961L30.48 6.09961L30.48 9.13961L32 9.13961Z"
          fill="currentColor"
        />
        <path
          d="M12.1905 4.5698L12.1905 6.0998L30.4805 6.0998L30.4805 4.5698L19.8105 4.5698L19.8105 3.0498L18.2905 3.0498L18.2905 4.5698L12.1905 4.5698Z"
          fill="currentColor"
        />
        <path
          d="M7.62012 4.5698L7.62012 3.0498L6.09012 3.0498L6.09012 4.5698L7.62012 4.5698Z"
          fill="currentColor"
        />
        <path
          d="M10.6699 3.05027L10.6699 1.53027L7.61992 1.53027L7.61992 3.05027L10.6699 3.05027Z"
          fill="currentColor"
        />
        <path
          d="M18.29 3.05027L18.29 1.53027L16.76 1.53027L16.76 3.05027L18.29 3.05027Z"
          fill="currentColor"
        />
        <path
          d="M16.7598 1.53L16.7598 0L10.6698 -2.66202e-07L10.6698 1.53L16.7598 1.53Z"
          fill="currentColor"
        />
      </g>
    </symbol>
  </svg>
);

function SVGProvider() {
  return createPortal(spriteSVGCode, document.body);
}

export default WithOnMounted(SVGProvider);
