<<<<<<< HEAD
import "./App.css";
import { Box } from "@chakra-ui/react";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <Box className="App">
      <Cart />
=======

import { Box } from '@chakra-ui/react';
import './App.css';
import Footer2 from './Components/Footer/Footer2';
import Footer1 from './Components/Footer/Footer1';
import { UpperHeading } from './Components/Middle/UpperHeading';
import { UpperMiddle } from './Components/Middle/UpperMiddle';
import UpperPoster from './Components/Middle/UpperPoster';
import LowerNav from './Components/Navbar/LowerNav';
import MiddleNav from './Components/Navbar/MiddleNav';
import UpperNav from './Components/Navbar/UpperNav';
import Footer3 from './Components/Footer/Footer3';
import Carousel  from "./Components/Carousel/Carousel.jsx"
import { Sec1Img } from './Components/GetData/Sec1Img';


function App() {
  return (
    <Box>
      <UpperNav />
      <hr />
      <MiddleNav />
      <hr />
      <LowerNav />
      <hr />
      <UpperMiddle/>
      <UpperHeading/>
      <hr />
      <UpperPoster/>
      <hr />
      <Footer1/>
      <Footer2/>
      <Footer3/>
      <hr />
      <Carousel />
      {/* <Sec1Img/> */}
>>>>>>> c8eb08110967bb01a6ef6cb3a254652f9abe2fc1
    </Box>
  );
}

export default App;
