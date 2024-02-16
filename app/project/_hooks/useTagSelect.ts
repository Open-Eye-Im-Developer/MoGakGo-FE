import React, { useRef, useState } from "react";

function useTagSelect() {
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
        if (!isValid(tag)) return;
        setTagList(prev => [...prev, tag]);
        ref.current!.value = "";
      }
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTagList(prev => prev.filter(t => t !== tag));
  };

  return { ref, tagList, handleAddTag, handleRemoveTag };
}

export default useTagSelect;
