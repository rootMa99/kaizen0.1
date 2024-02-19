import c from "./Home.module.css";
import HomeForm from "./HomeForm";

const Home = (p) => {
  return (
    <div className={c.homeContainer}>
      <div className={c.formContainer}>
        <HomeForm />
      </div>
      <div className={c.storyContainer}></div>
    </div>
  );
};

export default Home;
