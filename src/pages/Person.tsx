import PersonDetailsLeft from "../components/personDetails/PersonDetailsLeft";
import PersonDetailsRight from "../components/personDetails/PersonDetailsRight";

const Person = () => {
  return (
    <div className=" mx-auto grid grid-cols-1 gap-3 px-[30px] py-[40px] md:grid-cols-[30%,70%] xl:w-[1350px]">
      <PersonDetailsLeft />
      <PersonDetailsRight />
    </div>
  );
};

export default Person;
