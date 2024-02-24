import { useEffect, useState } from "react";

type SectionDropdownProps = {
  items: string[];
  onToggle: (value: string) => void;
  title?: string;
};

const SectionDropdown = ({ items, onToggle, title }: SectionDropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedItem(value);
  };

  useEffect(() => {
    onToggle(selectedItem);
  }, [items, onToggle, selectedItem]);

  return (
    <select
      className={
        " select select-bordered h-1 min-h-8 w-fit rounded-full focus:outline-none lg:hidden " +
        (title === "Latest Trailers"
          ? "bg-[#1ed5a9] font-semibold text-tmdbDarkBlue "
          : "bg-tmdbDarkBlue text-[#1ed5a9]")
      }
      value={selectedItem || ""}
      onChange={handleChange}
      name="section"
    >
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SectionDropdown;
