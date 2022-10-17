
import  ScrollToTop  from './Components/Scroll/ScrollToTop'
import  ScrollToBottom  from './Components/Scroll/ScrollToBottom'

import UpperNav from './Components/Navbar/UpperNav';


import { UpperHeading } from './Components/Middle/UpperHeading';
import { UpperMiddle } from './Components/Middle/UpperMiddle';
import UpperPoster from './Components/Middle/UpperPoster';

import Ayurveda from './Components/Products/Ayurveda/Ayurveda';
import MineralSupliment from './Components/Products/Mineral Supplements/MineralSupliment';

import Footer1 from './Components/Footer/Footer1';
import DiseaseSec from './Components/Products/Disease/DiseaseSec';
import Brands from './Components/Products/Featured brands/Brands';

import { Box } from "@chakra-ui/react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Home from "./pages/Home";
import { Route, Routes, Router } from "react-router-dom";
import Multivitamins from "./pages/Multivitamins";
import Devices from "./pages/Devices";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Box>
      
      <ScrollToTop/>
      <ScrollToBottom/>
      <UpperNav />
      <UpperMiddle/>
      <UpperHeading/>
      <UpperPoster/>
      <DiseaseSec/>
      <Brands/>
      <MineralSupliment/>
      <Ayurveda/>
      <Footer1/>

    
  

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/multivitamins" element={<Multivitamins />}></Route>
        <Route path="/devices" element={<Devices />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
