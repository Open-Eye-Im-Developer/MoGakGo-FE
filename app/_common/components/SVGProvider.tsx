"use client";

import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";

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
  </svg>
);

function SVGProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMounted(true);
  }, []);

  return isMounted && createPortal(spriteSVGCode, document.body);
}

export default SVGProvider;
