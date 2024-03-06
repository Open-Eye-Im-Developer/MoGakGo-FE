import React, { useRef, useState } from "react";

function useTagSelect(form: FormProps["form"]) {
  const ref = useRef<HTMLInputElement>(null);
  const [tagList, setTagList] = useState<string[]>([]);

  const isValid = (tag: string) => {
    if (tag.trim() === "" || tag.trim().length > 7) return false;
    if (tagList.includes(tag) || tagList.length >= 3) return false;

    return true;
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (ref.current) {
      const tag = ref.current?.value || "";

      if (key === "Enter") {
        if (e.nativeEvent.isComposing) {
          return;
        }
        if (!isValid(tag)) return;
        setTagList(prev => [...prev, tag]);
        const formattedTagList = tagList.map(t => ({ content: t }));
        formattedTagList.push({ content: tag });
        form.setValue("tags", formattedTagList);
        ref.current!.value = "";
      }
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTagList(prev => prev.filter(t => t !== tag));

    const currentTagList = form.getValues("tags");
    form.setValue(
      "tags",
      currentTagList.filter((t: { content: string }) => t.content !== tag),
    );
  };

  return { ref, tagList, handleAddTag, handleRemoveTag };
}

export default useTagSelect;
