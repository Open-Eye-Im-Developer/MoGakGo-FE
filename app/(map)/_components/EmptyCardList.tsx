import { Card, CardContent } from "@/app/_common/shadcn/ui/card";
import { Button } from "@/app/_common/shadcn/ui/button";

interface Props {
  onClick: () => void;
}

function EmptyCardList({ onClick }: Props) {
  return (
    <Card className="h-[180px] w-[330px] sm:w-[450px]">
      <CardContent className="relative flex h-full w-full flex-col items-center justify-center p-0 text-center">
        <p className="pb-2">조회할 수 있는 카드 리스트가 없습니다.</p>
        <Button className="absolute bottom-5 bg-neoYellow" onClick={onClick}>
          돌아가기
        </Button>
      </CardContent>
    </Card>
  );
}

export default EmptyCardList;
