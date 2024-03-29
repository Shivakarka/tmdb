import { useState, useRef, useLayoutEffect, useEffect } from "react";

type SwitchProps = {
  items: string[];
  onToggle: (value: string) => void;
  title: string;
};

const Switch = ({ items, onToggle, title }: SwitchProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidths, setItemWidths] = useState<(number | null)[]>([]);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    setItemWidths(itemRefs.current.map((ref) => ref?.offsetWidth ?? null));
  }, [items]);

  useEffect(() => {
    onToggle(items[activeIndex]);
  }, [activeIndex, items, onToggle]);

  const handleToggle = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={` relative z-[1] hidden items-center rounded-[30px] border border-solid font-semibold hover:cursor-pointer lg:flex ${title === "Latest Trailers" ? "border-[#1ed5a9] text-white " : "border-tmdbDarkBlue"}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          ref={(ref) => (itemRefs.current[index] = ref)}
          onClick={() => handleToggle(index)}
          className={`h-8 rounded-[30px] px-5 py-1 ${
            activeIndex === index &&
            ` ${title === "Latest Trailers" ? "text-tmdbDarkBlue" : "bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] bg-clip-text text-transparent"}`
          }`}
        >
          {item}
        </div>
      ))}
      <div
        className={`absolute z-[-1] h-8 rounded-[30px] bg-tmdbDarkBlue transition-all duration-300 ease-in-out ${title === "Latest Trailers" ? " bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]" : ""}`}
        style={{
          left:
            activeIndex > 0
              ? itemWidths
                  .slice(0, activeIndex)
                  .reduce((acc: number, width) => acc + (width ?? 0), 0)
              : 0,
          width: itemWidths[activeIndex] ?? 0,
        }}
      ></div>
    </div>
  );
};

export default Switch;
