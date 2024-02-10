import ThatsAWrap from "../components/main/ThatsAWrap";
import Welcome from "../components/main/Welcome";
import Section from "../components/main/Section";

const Home = () => {
  const handleToggleValue = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <Welcome />
      <ThatsAWrap />
      <Section
        title="Trending"
        items={["Today", "This Week"]}
        onToggle={handleToggleValue}
      />
    </div>
  );
};

export default Home;
