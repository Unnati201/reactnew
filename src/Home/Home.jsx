import React from 'react';
import "./Home.scss";
import "./home.css";


const Home = () => {
  return (
     <div className='home-design'>
      <video className='home-video-wrapp' src="rgs-img/empower.mp4" muted playsInline autoPlay loop></video>
      {/* <img src="rgs-img/home.jpg" alt="" className='images-bg' ></img> */}
    

      <h3 className='h3-homestyle'>Empowering </h3><br/><br/>
      {/* our customers for the future</h3> */}
      <h3 className='h3-cont-style'> our customers <br/> for the future</h3>
     
    </div>
  )
}

export default Home;
