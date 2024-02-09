type DropdownProps = {
  title: string;
  options: string[];
};

const Dropdown = ({ title, options }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-hover">
      <div role="button" className="bg-transparent">
        {title}
      </div>
      <ul className="menu dropdown-content absolute left-[-20px] top-10 z-[50] w-[12rem] rounded bg-base-100 p-2 font-sans text-gray-700 shadow">
        {options.map((option, index) => (
          <li key={index}>
            <a>{option}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
