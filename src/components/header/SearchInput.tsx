"use client";

import * as inputGroup from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (
        event.key !== "/" ||
        !searchInput.current ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      event.preventDefault();

      searchInput.current.focus();
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <inputGroup.InputGroup className="max-w-sm min-w-40">
      <inputGroup.InputGroupInput
        placeholder="Search Articles..."
        ref={searchInput}
      />
      <inputGroup.InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </inputGroup.InputGroupAddon>
      <inputGroup.InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </inputGroup.InputGroupAddon>
    </inputGroup.InputGroup>
  );
};

export default SearchInput;
