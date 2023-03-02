import React from 'react';
import './Industry.scss';

const Industry = (props) => {
  return (
 
  
    
    <div>
   {/* <h3>Key Verticals and Industries Served</h3> */}
   {/* <div class= "industry-wrap"> */}
   

     
    <div class="ind_wrap">

     
  
      {/* <div class="industry__data"> */}
      <img src={props.image} class="industry__image" alt="" />
      </div>
      {/* </div> */}

      {/* <div> */}
      <h2 className="industry__title">{props.ttl}</h2>
      {/* </div> */}

      {/* <div> */}
        <p className="industry__desc">{props.desc}</p>
      
    {/* </div> */}
    
    
    </div>


 
    
  )
}

export default Industry
