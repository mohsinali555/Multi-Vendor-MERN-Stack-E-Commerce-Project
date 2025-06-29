import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Events from "../components/Route/Events/Events";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;
