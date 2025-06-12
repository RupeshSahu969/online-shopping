import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Pages/Slider";
import Register from "./Pages/Register";
import MainRoute from "./MainRoute/MainRoute";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <MainRoute />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
