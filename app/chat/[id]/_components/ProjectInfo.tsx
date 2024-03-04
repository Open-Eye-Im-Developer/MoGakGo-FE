import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../_common/shadcn/ui/accordion";

function ProjectInfo() {
  return (
    <Accordion
      className="absolute z-10 w-full bg-white"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-4 hover:no-underline">
          📍 맥심플랜트 이태원점
        </AccordionTrigger>
        <AccordionContent className="px-4 text-gray-500">
          <div>🕡 16:00 ~ 18:00</div>
          <div> 🕡 2024. 01. 28 ( 9일전 )</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProjectInfo;
