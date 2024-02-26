import { MovieBg } from "../../utils/svgs.tsx";
import SectionDropdown from "./sectionDropdown/SectionDropdown.tsx";
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
      className={`relative mx-auto w-full bg-[length:1700px_60%] bg-bottom bg-no-repeat px-10 pt-[30px] lg:w-[1000px] lg:bg-bottom xl:w-[1300px] xl:bg-contain 
      ${title === "Latest Trailers" ? "bg-tmdbDarkBlue bg-opacity-95" : ""}`}
      style={{
        backgroundImage: title === "Trending" ? `url(${MovieBg})` : "none",
      }}
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
