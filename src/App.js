import React from "react";
import "./app.scss";
import Circle from "./Components/CircleAmination/Circle";
import ResNavbar from "./Components/ResNavbar/ResNavbar";
import Navbar from "./Components/Navbar";


// import Slider from "./Components/Slider";

//import Home from "./Home/Home";
import DataServices from "./Components/Data/DataServices";
//import Homedata from "./Home/Homedata"
import IndustryData from "./Components/IndustryExperties/IndustryData";
import StoryPoint from "./Components/Storypoint/StoryPoint"
import Homeslide from "./Components/Homedata/Homeslide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Consulting from "./Components/Consulting/Consulting";
import DataEngineer from "./Components/DataEng/DataEngineer";
import DigitalEngineer from "./Components/DigitalEng/DigitalEngineer";
import CloudEngineer from "./Components/CloudEng/CloudEngineer";
import ResponsiveNavbar from "./Components/Responsive/ResponsiveNavbar";


function App() {
  return (
    <div className="app">
     {/*<Router> 

       <ResNavbar/>
       <Routes>
<Route path='/' exact component={Homeslide} />
        <Route path='/services' component={DataServices} />
        <Route path='/industry' component={IndustryData} />
        <Route path='/contact' component={Contact} />
        <Route path='/solving-complex' component={Circle} />
      
        
        <Route path='/consulting' component={Consulting} />
        <Route path='/dataeng' component={DataEngineer} />
        <Route path='/digitaleng' component={DigitalEngineer} />
        <Route path='/cloudeng' component={CloudEngineer} />
        </Routes>
        </Router>
  */}

   {/* <Navbar/>  
       <Homeslide/>
*/}
      {/* <Home/>  */}
     {/* <Homedata/>  */}
    
     {/* <Slider/> */}
      {/* <Circle/> 
    
      <DataServices/> 
      <IndustryData/> 
     
   <StoryPoint/> 
   */}



<Router>
 
  {/* <ResponsiveNavbar/> */}
   <Navbar/> 
  <Homeslide/>
<Routes>
   <Route path='/' component={Homeslide} />
        <Route path='/industry' component={IndustryData} />
        
        <Route path='/service' component={DataServices} />
  

        <Route path='/success-stories' component={StoryPoint} />
        </Routes>
        </Router>
    
    </div>
  );
}

export default App;
