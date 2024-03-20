import React from "react";

function LoginLogo() {
  return (
    <div className="relative mt-16 h-60 w-80 overflow-hidden rounded-xl border-[12px] border-black">
      <h1 className="font-logo absolute left-1/2 top-1/2 z-[999] -translate-x-1/2 -translate-y-1/2 text-center text-5xl">
        <p>MOGAK</p>
        <p>GO</p>
      </h1>
      <div className="main-logo" />
      <div className="main-logo" />
    </div>
  );
}

export default LoginLogo;
