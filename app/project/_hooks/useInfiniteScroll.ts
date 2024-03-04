import { useEffect, useRef, useState } from "react";

function useInfiniteScroll(data: RequestListResponseData) {
  const [cursorId, setCursorId] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScrollEnded = () => {
      if (Array.isArray(data?.data)) {
        const lastItem = data.data[data.data.length - 1];
        if (lastItem) {
          setCursorId(lastItem.id);
        }
      }
    };

    const onScroll = () => {
      if (!ref.current) return;

      const { scrollTop, clientHeight, scrollHeight } =
        ref.current as HTMLDivElement;
      // 스크롤이 맨 아래에 도달했는지 확인
      if (scrollHeight - scrollTop <= clientHeight) {
        // 마지막 아이템의 ID를 기반으로 추가 데이터 로드
        onScrollEnded();
      }
    };

    if (ref.current) {
      // 데이터가 충분하지 않을 경우, 스크롤 이벤트가 동작하지 않아서 직접 호출
      const { clientHeight, scrollHeight } = ref.current;
      if (scrollHeight <= clientHeight) {
        onScrollEnded();
      }
      ref.current.addEventListener("scroll", onScroll);
    }

    return () => {
      // 컴포넌트가 언마운트되거나 ref.current가 변경될 때 이벤트 리스너 제거
      if (ref.current) {
        ref.current.removeEventListener("scroll", onScroll);
      }
    };
  }, [cursorId, data]);

  return { ref, cursorId };
}

export default useInfiniteScroll;
