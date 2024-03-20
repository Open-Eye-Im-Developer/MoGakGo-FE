/* eslint-disable no-undef */

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyBQ97DvaPZexD1hYg4XEMxVFp1impzqbic",
  projectId: "mogakgo",
  messagingSenderId: "658257635985",
  appId: "1:658257635985:web:756a510d644388f3012d30",
});

firebase.messaging();
