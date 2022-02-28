import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider.js";
import data from "./Data/data";
import Offers from "./Components/Offers";
import Heading from "./Components/Heading";

import "./App.css";
import StartProduct from "./Components/StarProduct";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu";
import HotAccessories from "./Components/HotAccessories";
import ProductReviews from './Components/ProductReviews.js'
import Videos from './Components/Videos.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import NavOptions from './Components/NavOptions'

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptions miPhones= {data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio ={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StartProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            ></HotAccessories>
          }
        ></Route>

        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            ></HotAccessories>
          }
        ></Route>

        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            ></HotAccessories>
          }
        ></Route>
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyleCover}
            ></HotAccessories>
          }
        ></Route>
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyleCover}
            ></HotAccessories>
          }
        ></Route>
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessoriesCover
              }
            ></HotAccessories>
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos = {data.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner end = {data.banner.end}/>
      <Footer footer = {data.footer}/>
    </Router>
  );
}

export default App;
