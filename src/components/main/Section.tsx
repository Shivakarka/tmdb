import SectionDropdown from "./dropdown/SectionDropdown.tsx";
import Switch from "./switch/Switch.tsx";

type SectionProps = {
  title: string;
  items: string[];
  onToggle: (value: string) => void;
  children: React.ReactNode;
};

const Section = ({ title, items, onToggle, children }: SectionProps) => {
  return (
    <section
      className={`relative mx-auto w-full px-10 pt-[30px] lg:w-[1000px] xl:w-[1300px] ${title === "Latest Trailers" ? "bg-tmdbDarkBlue bg-opacity-95" : ""}`}
    >
      <div className="flex items-center gap-5">
        <h2
          className={`text-2xl font-semibold ${title === "Latest Trailers" ? "text-white" : ""} `}
        >
          {title}
        </h2>
        <Switch items={items} onToggle={onToggle} title={title} />
        <SectionDropdown items={items} onToggle={onToggle} title={title} />
      </div>
      <div className="w-full pt-5 lg:w-[960px] xl:w-[1260px]">{children}</div>
    </section>
  );
};

export default Section;
