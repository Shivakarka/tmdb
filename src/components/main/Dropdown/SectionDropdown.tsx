import { useEffect, useState } from "react";

type SectionDropdownProps = {
  items: string[];
  onToggle: (value: string) => void;
};

const SectionDropdown = ({ items, onToggle }: SectionDropdownProps) => {
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
      className=" bg-tmdbDarkBlue select select-bordered h-1 min-h-8 w-fit rounded-full text-[#1ed5a9] focus:outline-none lg:hidden"
      value={selectedItem || ""}
      onChange={handleChange}
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
