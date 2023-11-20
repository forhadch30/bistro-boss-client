
import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Call from "../Call/Call";
import Category from "../Category/Category";
import Fcatured from "../Fcatured/Fcatured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Boss Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <Recommends></Recommends>
      <Fcatured></Fcatured>
      <Testimonials></Testimonials>
      <About></About>
    </div>
  );
};

export default Home;