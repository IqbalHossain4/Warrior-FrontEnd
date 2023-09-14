import Banner from "../Banner/Banner";
import "./Home.css";
import Hakaton from "../Hakaton/Hakaton";
import CategorySlider from "../CategorySlider/CategorySlider";
import Search from "../../Share/Search/Search";

const Home = () => {
  return (
    <div className="gradient-background">
        <Search/>
      <CategorySlider />
      <Banner></Banner>
      <Hakaton></Hakaton>
    </div>
  );
};

export default Home;
