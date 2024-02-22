import React from "react";
import { useRouter } from "next/navigation";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { Button } from "@/app/_common/shadcn/ui/button";

function AlertMyLocationAuth() {
  const { setPosition } = usePositionStore();
  const router = useRouter();

  const handleSetPosition = async () => {
    setPosition();

    router.push("/auth-mylocation");
  };

  const handleprefetchQuery = async () => {
    setPosition();
  };

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-xl font-semibold text-primary">내 위치 인증하기</h1>
        <small className="text-sm text-error">
          위치 인증이 필요한 서비스입니다.
        </small>
      </header>
      <p className="text-pretty break-all align-middle tracking-tighter text-gray-600">
        현재 모각GO는 사용자 위치를 기반하여, 지금 사용자가 위치한 ZONE에서만
        매칭 서비스를 제공하고 있어요. 만약 위치 기반을 허용하지 않았다면,
        허용으로 변경해주세요.
      </p>
      <Button onClick={handleSetPosition} onMouseEnter={handleprefetchQuery}>
        인증하러 가기
      </Button>
    </div>
  );
}

export default AlertMyLocationAuth;
