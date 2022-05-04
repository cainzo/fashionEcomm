import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Announcement></Announcement>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
