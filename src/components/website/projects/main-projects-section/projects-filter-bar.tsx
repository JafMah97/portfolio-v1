"use client";

import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { FaSearch, FaTimes } from "react-icons/fa";
import { LayoutGrid, List } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "ts-debounce";
import { Lang } from "@/utils/translations/dictionary-utils";
import { useTranslation } from "@/providers/translation-provider";

interface Props {
  lang: Lang;
  setIsGrid: (isGrid: boolean) => void;
  isGrid: boolean;
  initialQuery: string;
}

export default function ProjectsFilterBar({
  setIsGrid,
  isGrid,
  initialQuery,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const dict = useTranslation().projectsPage.main.projectsFilterBar;

  const updateURL = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

  const debouncedUpdateURL = useMemo(
    () => debounce((value: string) => updateURL(value), 500),
    [updateURL],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedUpdateURL(value);
  };

  const handleClear = () => {
    setQuery("");
    updateURL("");
  };

  const handleGrid = () => {
    setIsGrid(true);
  };
  const handleList = () => {
    setIsGrid(false);
  };

  const styleGrid = isGrid
    ? `
              flex items-center gap-2 px-6 py-2.5 rounded-lg 
              bg-white dark:bg-gray-600 shadow-md 
              text-blue-600 dark:text-blue-300 
              text-xs font-bold uppercase tracking-wider
              transition-all`
    : `flex items-center gap-2 px-6 py-2.5 rounded-lg 
              text-gray-600 dark:text-gray-300 
              text-xs font-bold uppercase tracking-wider
              hover:text-gray-900 dark:hover:text-white
              transition-all`;

  const styleList = !isGrid
    ? `
              flex items-center gap-2 px-6 py-2.5 rounded-lg 
              bg-white dark:bg-gray-600 shadow-md 
              text-blue-600 dark:text-blue-300 
              text-xs font-bold uppercase tracking-wider
              transition-all`
    : `flex items-center gap-2 px-6 py-2.5 rounded-lg 
              text-gray-600 dark:text-gray-300 
              text-xs font-bold uppercase tracking-wider
              hover:text-gray-900 dark:hover:text-white
              transition-all`;
  return (
    <MotionWrapper
      fadeUp
      delay={0.3}
      className="w-full max-w-5xl mx-auto space-y-6"
    >
      <div
        className={`
          flex flex-col md:flex-row gap-4 justify-between items-center 
          bg-white/20 dark:bg-gray-800/20 
          p-4 rounded-2xl border border-white/20 dark:border-gray-700/40 
          backdrop-blur-xl shadow-lg 
        `}
      >
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder={dict.searchPlaceholder}
            value={query}
            onChange={handleChange}
            className="
              w-full pl-11 pr-11 py-3 rounded-xl 
              bg-white/60 dark:bg-gray-900/60 
              border border-gray-300 dark:border-gray-700 
              text-gray-900 dark:text-gray-100
              placeholder-gray-500 dark:placeholder-gray-400
              focus:ring-2 focus:ring-primary outline-none
              transition-all
            "
          />

          {/* Clear Button  */}
          <button
            onClick={handleClear}
            className="
              absolute right-4 top-1/2 -translate-y-1/2 
              text-gray-400 hover:text-red-500 
              transition-colors
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* View Mode Toggle */}
        <div
          className="
            md:flex p-1 bg-gray-200/40 dark:bg-gray-700/40 
            rounded-xl backdrop-blur-sm hidden 
          "
        >
          <button onClick={handleGrid} className={styleGrid}>
            <LayoutGrid className="w-4 h-4" />
            {dict.grid}
          </button>

          <button onClick={handleList} className={styleList}>
            <List className="w-4 h-4" />
            {dict.list}
          </button>
        </div>
      </div>
    </MotionWrapper>
  );
}
