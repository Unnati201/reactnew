import React from 'react';
import "./Home.scss";

const homepages = (props) => {
  return (
  <div className="card-home-pg">
       <div  className="homebox">
     <img  src={props.img} class="homebox_image_page" alt='' />
      
     <div className="homebox_container">
      <h2 className="homebox_title_page">{props.title}</h2>
        <p className="homebox_description_page">{props.description}</p> 
        
        </div>
        </div>
</div>
    
  )
}

export default homepages
