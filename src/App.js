import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Pages/Slider";
import Register from "./Pages/Register";
import MainRoute from "./MainRoute/MainRoute";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Slider /> */}
      <MainRoute />
      {/* <Cart/> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
