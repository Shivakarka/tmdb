import Switch from "./switch/Switch";

type SectionProps = {
  title: string;
  items: string[];
  onToggle: (value: string) => void;
};

const Section = ({ title, items, onToggle }: SectionProps) => {
  return (
    <section className="mx-auto w-full px-10 pt-[30px] lg:w-[1300px]">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Switch items={items} onToggle={onToggle} />
      </div>
    </section>
  );
};

export default Section;
