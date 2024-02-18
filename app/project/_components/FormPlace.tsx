import React from "react";

import { Input } from "@/app/_common/shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/_common/shadcn/ui/form";

import useDebounceSearch from "../_hooks/useDebounceSearch";
import PlaceList from "./PlaceList";

interface FormTagProps extends IFormProps {}

function FormPlace(props: FormTagProps) {
  const { form } = props;
  const {
    placeInput,
    handleChangePlace,
    handleClickPlace,
    placeList,
    overlay,
  } = useDebounceSearch();

  return (
    <FormField
      control={form.control}
      name="place"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">📍 장소</FormLabel>
          <FormControl>
            <>
              <Input
                {...field}
                placeholder="장소를 입력하세요."
                value={placeInput || ""}
                onChangeCapture={handleChangePlace}
              />
              <PlaceList
                placeList={placeList}
                isOverlayered={overlay}
                onClickPlace={handleClickPlace}
              />
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default FormPlace;
