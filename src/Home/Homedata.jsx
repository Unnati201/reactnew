import React from 'react';
import Homepages from "../Home/Homepages"

const Homedata = () => {
  return (
    <div className="img-wrapper-data">
    <Homepages title="Achieve Digital Transformation"
      description="Data, Digital and Cloud to achieve scale, agility and security "
      img="rgs-img/digital-transformation.jpg"/>

      <Homepages title="Accelerate Insights and Growth "
      description="AI and ML to gain actionable bussiness insights"
      img="rgs-img/blindspots.jpg"/>

      <Homepages title="Eliminate Blind Spots"
      description="Discover new opportunities for your data, operation and bussiness "
      img="rgs-img/data.png"/>
      </div>
  )
}

export default Homedata;
