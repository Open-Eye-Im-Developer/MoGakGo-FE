import { IconRotateClockwise2 } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

interface Props {
  onClick: () => void;
}

function EmptyCardList({ onClick }: Props) {
  return (
    <div className="card h-[550px] w-[330px] bg-white/40 opacity-[0.99] backdrop-blur-md sm:w-[450px]">
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <p>조회할 수 있는 카드 리스트가 없습니다.</p>
        <Button className="mt-2 bg-primary" onClick={onClick}>
          <IconRotateClockwise2 className="mr-1 h-5 w-5" />
          돌아가기
        </Button>
      </div>
    </div>
  );
}

export default EmptyCardList;
