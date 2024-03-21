import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../shadcn/ui/drawer";
import { Button } from "../shadcn/ui/button";

function GPSInfoModal() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-xs text-black">허용 방법</Button>
      </DrawerTrigger>
      <DrawerContent className="z-100">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="my-3">GPS 허용 방법</DrawerTitle>
            <DrawerTitle className="text-sm">아이폰</DrawerTitle>
            <DrawerDescription>
              설정 {">"} 개인정보 보호 및 보안 {">"} 위치 서비스 {">"} 앱에서
              옵션을 항상 허용
            </DrawerDescription>
            <DrawerTitle className="mt-2 text-sm">안드로이드</DrawerTitle>
            <DrawerDescription>
              앱 아이콘을 길게 터치 {">"} 앱 정보 {">"} 권한 {">"} 위치 {">"}{" "}
              옵션 {">"} 항상 허용
            </DrawerDescription>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default GPSInfoModal;
