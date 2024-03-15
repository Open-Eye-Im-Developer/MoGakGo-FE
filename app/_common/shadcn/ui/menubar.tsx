"use client";

import * as React from "react";
import { Circle } from "lucide-react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";

import { cn } from "@/app/_common/shadcn/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center space-x-1 rounded-full border-2 border-black bg-white shadow-neo dark:border-slate-800 dark:bg-slate-950",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-full px-3 py-1.5 text-sm font-medium focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-neoGreen data-[state=open]:text-white data-[state=open]:outline data-[state=open]:outline-2 data-[state=open]:outline-black dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    {/* // TODO: svg sprite 작업 아후 아이콘 변경 */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={20}
      width={20}
      id="Hand-Point--Streamline-Pixel"
      className="rotate-90 fill-slate-600 dark:fill-slate-400"
    >
      <desc>{"Hand Point Streamline Icon: https://streamlinehq.com"}</desc>
      <title>{"hand-point"}</title>
      <g>
        <path
          d="m17.715 13.7175 0 1.1400000000000001 2.2874999999999996 0 0 3.4275 1.1400000000000001 0 0 -8.0025 -1.1400000000000001 0 0 3.435 -2.2874999999999996 0z"
          strokeWidth={1}
        />
        <path
          d="M18.855 20.572499999999998H7.4325v-1.1400000000000001H6.285v1.1400000000000001H5.1450000000000005V24h15.997499999999999v-3.4275h-1.1400000000000001v-2.2874999999999996h-1.1475Zm0 2.2874999999999996H16.575000000000003v-1.1475h2.2800000000000002Z"
          strokeWidth={1}
        />
        <path
          d="M18.855 9.1425h1.1475v1.1400000000000001h-1.1475Z"
          strokeWidth={1}
        />
        <path
          d="m16.575000000000003 13.7175 1.1400000000000001 0 0 -4.574999999999999 1.1400000000000001 0 0 -1.1400000000000001 -2.2800000000000002 0 0 5.715z"
          strokeWidth={1}
        />
        <path
          d="M14.287500000000001 13.7175h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
          strokeWidth={1}
        />
        <path
          d="M8.5725 14.857499999999998H12v1.1400000000000001h-3.4275Z"
          strokeWidth={1}
        />
        <path
          d="m9.712499999999999 10.2825 -1.1400000000000001 0 0 1.1475 2.2874999999999996 0 0 -3.4275 2.2874999999999996 0 0 3.4275 -2.2874999999999996 0 0 1.1400000000000001 1.1400000000000001 0 0 2.2874999999999996 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -5.715 2.2874999999999996 0 0 -1.1475 -5.715 0 0 -5.715 -1.1475 0 0 9.1425z"
          strokeWidth={1}
        />
        <path
          d="M7.4325 0h2.2800000000000002v1.1400000000000001H7.4325Z"
          strokeWidth={1}
        />
        <path
          d="M7.4325 13.7175h1.1400000000000001v1.1400000000000001H7.4325Z"
          strokeWidth={1}
        />
        <path
          d="m8.5725 10.2825 0 -1.1400000000000001 -1.1400000000000001 0 0 -8.0025 -1.1475 0 0 8.0025 -1.1400000000000001 0 0 1.1400000000000001 3.4275 0z"
          strokeWidth={1}
        />
        <path
          d="M5.1450000000000005 18.285h1.1400000000000001v1.1475H5.1450000000000005Z"
          strokeWidth={1}
        />
        <path
          d="M4.005 15.997499999999999h1.1400000000000001v2.2874999999999996H4.005Z"
          strokeWidth={1}
        />
        <path
          d="M4.005 10.2825h1.1400000000000001v1.1475H4.005Z"
          strokeWidth={1}
        />
        <path d="M2.8575 11.43h1.1475v4.5675H2.8575Z" strokeWidth={1} />
      </g>
    </svg>
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border-2 border-black bg-white p-1 text-slate-950 shadow-neo data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border-2 border-black bg-white p-1 text-slate-950 shadow-neo data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        {/* // TODO: svg sprite 작업 아후 아이콘 변경 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height={24}
          width={24}
          id="Hand-Ok--Streamline-Pixel"
        >
          <desc>{"Hand Ok Streamline Icon: https://streamlinehq.com"}</desc>
          <title>{"hand-ok"}</title>
          <g>
            <path
              d="M20.572499999999998 12.57h1.1400000000000001v3.4275h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M20.572499999999998 9.1425h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M19.424999999999997 15.997499999999999h1.1475v2.2874999999999996H19.424999999999997Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M19.424999999999997 8.0025h1.1475v1.1400000000000001H19.424999999999997Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M18.285 18.285h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M18.285 11.43h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M18.285 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 20.572499999999998H5.715v-1.1400000000000001H4.5675v1.1400000000000001H3.4275V24H19.424999999999997v-3.4275h-1.1400000000000001v-1.1400000000000001h-1.1475Zm0 2.2874999999999996h-2.2800000000000002v-1.1475h2.2800000000000002Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 12.57h1.1475v2.2874999999999996h-1.1475Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 10.2825h1.1475v1.1475h-1.1475Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M14.857499999999998 9.1425h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M13.71 14.857499999999998h3.4275v1.1400000000000001h-3.4275Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M13.71 5.715h4.574999999999999v1.1400000000000001h-4.574999999999999Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M13.71 10.2825h1.1475v1.1475h-1.1475Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M12.57 11.43h1.1400000000000001v3.4275h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M12.57 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="m10.2825 10.2825 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -6.862500000000001 -1.1475 0 0 9.1425z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M9.1425 10.2825h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M7.995 0h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M6.855 10.2825h1.1400000000000001v2.2874999999999996H6.855Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M6.855 1.1400000000000001h1.1400000000000001v8.0025H6.855Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M5.715 0h1.1400000000000001v1.1400000000000001H5.715Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M4.5675 11.43h1.1475v2.2874999999999996H4.5675Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="m4.5675 10.2825 1.1475 0 0 -9.1425 -1.1475 0 0 2.2874999999999996 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0 0 5.7075000000000005z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M3.4275 17.145h1.1400000000000001v2.2874999999999996H3.4275Z"
              fill="#000000"
              strokeWidth={1}
            />
            <path
              d="M2.2874999999999996 4.574999999999999h1.1400000000000001v12.57H2.2874999999999996Z"
              fill="#000000"
              strokeWidth={1}
            />
          </g>
        </svg>
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400",
        className,
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
