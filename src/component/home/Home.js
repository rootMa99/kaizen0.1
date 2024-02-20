import c from "./Home.module.css";
import HomeForm from "./HomeForm";
import bgs from "../../assets/backgroundSvg.svg";
import story from "../../assets/leftground.png";
import React from "react";

const Home = (p) => {
  return (
    <React.Fragment>
      <div className={c.homeContainer}>
        <div className={c.formContainer}>
          <HomeForm />
        </div>
        <div className={c.storyContainer}>
          <img src={bgs} alt="" className={c.bgs} />
          <img src={story} alt="" className={c.bgsq}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
